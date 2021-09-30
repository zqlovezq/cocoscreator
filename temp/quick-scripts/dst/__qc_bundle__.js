
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
require('./assets/Script/Config');
require('./assets/Script/Hook');
require('./assets/Script/IndexMain');
require('./assets/Script/Level');
require('./assets/Script/MD5');
require('./assets/Script/Main');
require('./assets/Script/Tools');
require('./assets/Script/login');
require('./assets/migration/use_reversed_rotateBy');

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
                    var __filename = 'preview-scripts/assets/Script/Level.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19283dAXTFAOrQfB3/KaAjP', 'Level');
// Script/Level.js

"use strict";

//关卡数据
// 
module.exports = {
  "level0": {
    "id": "零",
    "score": 500,
    "maxScore": 1500,
    "totalScore": 1500,
    "extra": "red,mystery",
    "redPack": 88.88
  },
  "level1": {
    "id": "一",
    "score": 500,
    "maxScore": 1500,
    "totalScore": 1500,
    "good": "b|150,g|1350",
    "extra": "red",
    "redPack": 88.88
  },
  "level2": {
    "id": "二",
    "score": 925,
    "maxScore": 1840,
    "totalScore": 3340,
    "good": "b|300,g|940,m|200,d|400",
    "extra": "red",
    "redPack": 66.66
  },
  "level3": {
    "id": "三",
    "score": 1560,
    "maxScore": 1000,
    "totalScore": 4340,
    "good": "b|200,g|800",
    "redPack": 20.96
  },
  "level4": {
    "id": "四",
    "score": 2405,
    "maxScore": 1500,
    "totalScore": 5840,
    "good": "b|200,g|1225,m|75",
    "extra": "red",
    "redPack": 14.36
  },
  "level5": {
    "id": "五",
    "score": 3460,
    "maxScore": 1300,
    "totalScore": 7140,
    "good": "b|130,g|370,d|800",
    "boom": 1,
    "redPack": 10.71
  },
  "level6": {
    "id": "六",
    "score": 4725,
    "maxScore": 2000,
    "totalScore": 9140,
    "good": "b|200,d|1200,g|600",
    "redPack": 8.42
  },
  "level7": {
    "id": "七",
    "score": 6200,
    "maxScore": 1500,
    "totalScore": 10640,
    "good": "b|200,g|1000,d|400",
    "extra": "red,mystery",
    "boom": 2,
    "redPack": 6.88
  },
  "level8": {
    "id": "八",
    "score": 7500,
    "maxScore": 2000,
    "totalScore": 12640,
    "good": "b|200,g|1400,m|400",
    "redPack": 5.77
  },
  "level9": {
    "id": "九",
    "score": 9395,
    "maxScore": 2000,
    "totalScore": 14640,
    "good": "b|300,g|1300,d|400",
    "redPack": 4.94
  },
  "level10": {
    "id": "十",
    "score": 10500,
    "maxScore": 2000,
    "totalScore": 16640,
    "good": "b|200,g|1200,d|400,m|200",
    "extra": "red",
    "redPack": 4.30
  },
  "level11": {
    "id": "十一",
    "score": 12000,
    "maxScore": 1500,
    "totalScore": 18140,
    "good": "b|200,g|850,d|400",
    "mouse": "1",
    "extra": "red,mystery",
    "boom": 1,
    "redPack": 3.80
  },
  "level12": {
    "id": "十二",
    "score": 13000,
    "maxScore": 3000,
    "totalScore": 21140,
    "good": "b|200,g|1400,d|1200,m|200",
    "extra": "red",
    "redPack": 3.39
  },
  "level13": {
    "id": "十三",
    "score": 15700,
    "maxScore": 2500,
    "totalScore": 23640,
    "good": "b|200,g|1500,d|800",
    "extra": "red",
    "redPack": 3.05
  },
  "level14": {
    "id": "十四",
    "score": 17500,
    "maxScore": 2000,
    "totalScore": 25640,
    "good": "b|200,g|900,d|800",
    "mouse": "2",
    "boom": 2,
    "redPack": 2.76
  },
  "level15": {
    "id": "十五",
    "score": 18500,
    "maxScore": 3000,
    "totalScore": 28640,
    "good": "b|200,g|800,d|2000",
    "extra": "red,mystery",
    "redPack": 2.52
  },
  "level16": {
    "id": "十六",
    "score": 21000,
    "maxScore": 3000,
    "totalScore": 31640,
    "good": "b|200,g|1300,d|800",
    "mouse": ",1",
    "redPack": 2.32
  },
  "level17": {
    "id": "十七",
    "score": 22500,
    "maxScore": 3500,
    "totalScore": 35140,
    "good": "g|1125,b|175,m|100",
    "mouse": ",3",
    "redPack": 2.14
  },
  "level18": {
    "id": "十八",
    "score": 24000,
    "maxScore": 5000,
    "totalScore": 40140,
    "good": "g|1000,d|800,m|200",
    "extra": "red,mystery",
    "mouse": "4,4",
    "redPack": 1.99
  },
  "level19": {
    "id": "十九",
    "score": 30000,
    "maxScore": 4700,
    "totalScore": 44840,
    "good": "b|200,g|1100,d|1200,m|100",
    "mouse": ",3",
    "redPack": 1.85
  },
  "level20": {
    "id": "二十",
    "score": 33000,
    "maxScore": 4000,
    "totalScore": 48840,
    "good": "b|200,g|1300,m|200",
    "mouse": "4,3",
    "extra": "red",
    "boom": 1,
    "redPack": 1.73
  },
  "level21": {
    "id": "二十一",
    "score": 36500,
    "maxScore": 4000,
    "totalScore": 52840,
    "good": "g|500",
    "mouse": ",5",
    "boom": 1,
    "redPack": 1.62
  },
  "level22": {
    "id": "二十二",
    "score": 39000,
    "maxScore": 4000,
    "totalScore": 56840,
    "good": "d|4000",
    "extra": "red",
    "boom": 2,
    "redPack": 1.53
  },
  "level23": {
    "id": "二十三",
    "score": 41500,
    "maxScore": 4000,
    "totalScore": 60840,
    "good": "b|200,g|1500,m|200",
    "mouse": ",3",
    "extra": ",mystery",
    "boom": 2,
    "redPack": 1.44
  },
  "level24": {
    "id": "二十四",
    "score": 43500,
    "maxScore": 4000,
    "totalScore": 64840,
    "good": "b|200,g|1400,d|800,m|200",
    "mouse": ",2",
    "extra": "red",
    "redPack": 1.36
  },
  "level25": {
    "id": "二十五",
    "score": 46000,
    "maxScore": 4200,
    "totalScore": 69040,
    "mouse": ",6",
    "boom": 3,
    "redPack": 1.29
  },
  "level26": {
    "id": "二十六",
    "score": 49500,
    "maxScore": 5000,
    "totalScore": 74040,
    "mouse": "16,6",
    "boom": 1,
    "redPack": 1.22
  },
  "level27": {
    "id": "二十七",
    "score": 52500,
    "maxScore": 5000,
    "totalScore": 79040,
    "good": "b|200,g|500,d|3600",
    "mouse": ",1",
    "boom": 1,
    "extra": "red",
    "redPack": 1.17
  },
  "level28": {
    "id": "二十八",
    "score": 55500,
    "maxScore": 5000,
    "totalScore": 84040,
    "good": "b|200,g|1100,m|150,d|1200",
    "mouse": "5,3",
    "boom": 1,
    "extra": "red",
    "redPack": 1.11
  },
  "level29": {
    "id": "二十九",
    "score": 58000,
    "maxScore": 5000,
    "totalScore": 89040,
    "good": "b|200,g|1300,d|1200",
    "mouse": "4,3",
    "extra": "red",
    "boom": 1,
    "redPack": 1.06
  },
  "level30": {
    "id": "三十",
    "score": 62000,
    "maxScore": 5000,
    "totalScore": 94040,
    "good": "b|200,g|1250,d|2000",
    "mouse": "3,2",
    "boom": 3,
    "extra": "red",
    "redPack": 1.01
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTGV2ZWwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFtQjtBQUVmLFlBQVc7QUFDUCxVQUFLLEdBREU7QUFFUCxhQUFVLEdBRkg7QUFHUCxnQkFBVyxJQUhKO0FBSVAsa0JBQWEsSUFKTjtBQUtQLGFBQVEsYUFMRDtBQU1QLGVBQVU7QUFOSCxHQUZJO0FBV2YsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsR0FGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyxjQUxBO0FBTVAsYUFBUSxLQU5EO0FBT1AsZUFBVTtBQVBILEdBWEk7QUFvQmYsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsR0FGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyx5QkFMQTtBQU1QLGFBQVEsS0FORDtBQU9QLGVBQVU7QUFQSCxHQXBCSTtBQTZCZixZQUFXO0FBQ1AsVUFBSyxHQURFO0FBRVAsYUFBVSxJQUZIO0FBR1AsZ0JBQVcsSUFISjtBQUlQLGtCQUFhLElBSk47QUFLUCxZQUFPLGFBTEE7QUFNUCxlQUFVO0FBTkgsR0E3Qkk7QUFxQ2YsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsSUFGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyxtQkFMQTtBQU1QLGFBQVEsS0FORDtBQU9QLGVBQVU7QUFQSCxHQXJDSTtBQThDZixZQUFXO0FBQ1AsVUFBSyxHQURFO0FBRVAsYUFBVSxJQUZIO0FBR1AsZ0JBQVcsSUFISjtBQUlQLGtCQUFhLElBSk47QUFLUCxZQUFPLG1CQUxBO0FBTVAsWUFBTyxDQU5BO0FBT1AsZUFBVTtBQVBILEdBOUNJO0FBdURmLFlBQVc7QUFDUCxVQUFLLEdBREU7QUFFUCxhQUFVLElBRkg7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QUFVO0FBUEYsR0FwUEc7QUE2UGYsYUFBWTtBQUNSLFVBQUssS0FERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxvQkFMQztBQU1SLGFBQVEsSUFOQTtBQU9SLFlBQU8sQ0FQQztBQVFSLGFBQVEsS0FSQTtBQVNSLGVBQVU7QUFURixHQTdQRztBQXdRZixhQUFZO0FBQ1IsVUFBSyxLQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLDJCQUxDO0FBTVIsYUFBUSxLQU5BO0FBT1IsWUFBTyxDQVBDO0FBUVIsYUFBUSxLQVJBO0FBU1IsZUFBVTtBQVRGLEdBeFFHO0FBbVJmLGFBQVk7QUFDUixVQUFLLEtBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLFlBQU8scUJBTEM7QUFNUixhQUFRLEtBTkE7QUFPUixhQUFRLEtBUEE7QUFRUixZQUFPLENBUkM7QUFTUixlQUFVO0FBVEYsR0FuUkc7QUE4UmYsYUFBWTtBQUNSLFVBQUssSUFERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxxQkFMQztBQU1SLGFBQVEsS0FOQTtBQU9SLFlBQU8sQ0FQQztBQVFSLGFBQVEsS0FSQTtBQVNSLGVBQVU7QUFURjtBQTlSRyxDQUFuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lhbPljaHmlbDmja5cbi8vIFxubW9kdWxlLmV4cG9ydHMgID0gIHtcblxuICAgIFwibGV2ZWwwXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIumbtlwiLFxuICAgICAgICBcInNjb3JlXCIgOiA1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxNTAwLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWQsbXlzdGVyeVwiLFxuICAgICAgICBcInJlZFBhY2tcIjo4OC44OFxuICAgIH0sXG5cbiAgICBcImxldmVsMVwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuIBcIixcbiAgICAgICAgXCJzY29yZVwiIDogNTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJnb29kXCI6XCJifDE1MCxnfDEzNTBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjg4Ljg4XG4gICAgfSxcbiAgICBcImxldmVsMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogOTI1LFxuICAgICAgICBcIm1heFNjb3JlXCI6MTg0MCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MzM0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDMwMCxnfDk0MCxtfDIwMCxkfDQwMFwiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6NjYuNjZcbiAgICB9LFxuICAgIFwibGV2ZWwzXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS4iVwiLFxuICAgICAgICBcInNjb3JlXCIgOiAxNTYwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDM0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDgwMFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoyMC45NlxuICAgIH0sXG4gICAgXCJsZXZlbDRcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5ZubXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDI0MDUsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo1ODQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTIyNSxtfDc1XCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxNC4zNlxuICAgIH0sXG4gICAgXCJsZXZlbDVcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqUXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDM0NjAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxMzAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo3MTQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MTMwLGd8MzcwLGR8ODAwXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEwLjcxXG4gICAgfSxcbiAgICBcImxldmVsNlwiIDoge1xuICAgICAgICBcImlkXCI6XCLlha1cIixcbiAgICAgICAgXCJzY29yZVwiIDogNDcyNSxcbiAgICAgICAgXCJtYXhTY29yZVwiOjIwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjkxNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZHwxMjAwLGd8NjAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjguNDJcbiAgICB9LFxuICAgIFwibGV2ZWw3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA2MjAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTA2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMDAwLGR8NDAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwiYm9vbVwiOjIsXG4gICAgICAgIFwicmVkUGFja1wiOjYuODhcbiAgICB9LFxuICAgIFwibGV2ZWw4XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuWFq1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA3NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTI2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxNDAwLG18NDAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjUuNzdcbiAgICB9LFxuICAgIFwibGV2ZWw5XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS5nVwiLFxuICAgICAgICBcInNjb3JlXCIgOiA5Mzk1LFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTQ2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwzMDAsZ3wxMzAwLGR8NDAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjQuOTRcbiAgICB9LFxuICAgIFwibGV2ZWwxMFwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYFcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTA1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoyMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxNjY0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEyMDAsZHw0MDAsbXwyMDBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjQuMzBcbiAgICB9LFxuICAgIFwibGV2ZWwxMVwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHkuIBcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTIwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxODE0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDg1MCxkfDQwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIxXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjMuODBcbiAgICB9LFxuICAgIFwibGV2ZWwxMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTMwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjozMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoyMTE0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDE0MDAsZHwxMjAwLG18MjAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjozLjM5XG4gICAgfSxcbiAgICBcImxldmVsMTNcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LiJXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE1NzAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MjM2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxNTAwLGR8ODAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjozLjA1XG4gICAgfSxcbiAgICBcImxldmVsMTRcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5ZubXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE3NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MjU2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3w5MDAsZHw4MDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiMlwiLFxuICAgICAgICBcImJvb21cIjoyLFxuICAgICAgICBcInJlZFBhY2tcIjoyLjc2XG4gICAgfSxcbiAgICBcImxldmVsMTVcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LqUXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE4NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MzAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6Mjg2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3w4MDAsZHwyMDAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwicmVkUGFja1wiOjIuNTJcbiAgICB9LFxuICAgIFwibGV2ZWwxNlwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHlha1cIixcbiAgICAgICAgXCJzY29yZVwiIDogMjEwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjozMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjozMTY0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEzMDAsZHw4MDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiLDFcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6Mi4zMlxuICAgIH0sXG4gICAgXCJsZXZlbDE3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuWNgeS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiAyMjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjM1MDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjM1MTQwLFxuICAgICAgICBcImdvb2RcIjpcImd8MTEyNSxifDE3NSxtfDEwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsM1wiLFxuICAgICAgICBcInJlZFBhY2tcIjoyLjE0XG4gICAgfSxcbiAgICBcImxldmVsMThcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5YWrXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDI0MDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDAxNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiZ3wxMDAwLGR8ODAwLG18MjAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwibW91c2VcIjpcIjQsNFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjk5XG4gICAgfSxcbiAgICBcImxldmVsMTlcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LmdXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDMwMDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NDcwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDQ4NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMTAwLGR8MTIwMCxtfDEwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsM1wiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjg1XG4gICAgfSxcbiAgICBcImxldmVsMjBcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2BXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDMzMDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NDAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDg4NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMzAwLG18MjAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIjQsM1wiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJib29tXCI6MSxcbiAgICAgICAgXCJyZWRQYWNrXCI6MS43M1xuICAgIH0sXG4gICAgXCJsZXZlbDIxXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS4gFwiLFxuICAgICAgICBcInNjb3JlXCIgOiAzNjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjUyODQwLFxuICAgICAgICBcImdvb2RcIjpcImd8NTAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIiw1XCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEuNjJcbiAgICB9LFxuICAgIFwibGV2ZWwyMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuozljYHkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogMzkwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo0MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo1Njg0MCxcbiAgICAgICAgXCJnb29kXCI6XCJkfDQwMDBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwiYm9vbVwiOjIsXG4gICAgICAgIFwicmVkUGFja1wiOjEuNTNcbiAgICB9LFxuICAgIFwibGV2ZWwyM1wiIDoge1xuICAgICAgICBcImlkXCI6XCLkuozljYHkuIlcIixcbiAgICAgICAgXCJzY29yZVwiIDogNDE1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo0MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo2MDg0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDE1MDAsbXwyMDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiLDNcIixcbiAgICAgICAgXCJleHRyYVwiOlwiLG15c3RlcnlcIixcbiAgICAgICAgXCJib29tXCI6MixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS40NFxuICAgIH0sXG4gICAgXCJsZXZlbDI0XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeWbm1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA0MzUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjY0ODQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTQwMCxkfDgwMCxtfDIwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsMlwiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4zNlxuICAgIH0sXG4gICAgXCJsZXZlbDI1XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS6lFwiLFxuICAgICAgICBcInNjb3JlXCIgOiA0NjAwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQyMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjY5MDQwLFxuICAgICAgICBcIm1vdXNlXCI6XCIsNlwiLFxuICAgICAgICBcImJvb21cIjozLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjI5XG4gICAgfSxcbiAgICBcImxldmVsMjZcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2B5YWtXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDQ5NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NzQwNDAsXG4gICAgICAgIFwibW91c2VcIjpcIjE2LDZcIixcbiAgICAgICAgXCJib29tXCI6MSxcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4yMlxuICAgIH0sXG4gICAgXCJsZXZlbDI3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA1MjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjUwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjc5MDQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8NTAwLGR8MzYwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsMVwiLFxuICAgICAgICBcImJvb21cIjoxLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4xN1xuICAgIH0sXG4gICAgXCJsZXZlbDI4XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeWFq1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA1NTUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjUwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjg0MDQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTEwMCxtfDE1MCxkfDEyMDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiNSwzXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjExXG4gICAgfSxcbiAgICBcImxldmVsMjlcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2B5LmdXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDU4MDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6ODkwNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMzAwLGR8MTIwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCI0LDNcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEuMDZcbiAgICB9LFxuICAgIFwibGV2ZWwzMFwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuInljYFcIixcbiAgICAgICAgXCJzY29yZVwiIDogNjIwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo1MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo5NDA0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEyNTAsZHwyMDAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIjMsMlwiLFxuICAgICAgICBcImJvb21cIjozLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4wMVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f815fcXZ9BIY+pPRsOeaGx', 'Tools');
// Script/Tools.js

"use strict";

cc.Tools = {
  /**
   * @param {*} event 数数打点的事件名称
   * @param {*} pro 数数打点的关联属性
  */
  dot: function dot(event, pro) {
    if (cc.sys.isNative) {
      cc.log("注册打点" + event);
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event, pro);
    }
  },

  /**
   * 看视频回调
   */
  adCallBack: function adCallBack(ecpm) {
    cc.log("观看视频回调"); // 获取广告ad之前先用epcr
    // 看视频得体力

    this.getUserEcpm(ecpm).then(function () {
      cc.log("获取ecpm之后才调用");

      if (cc.zm.userInfo.power <= 0) {
        var sendData = {
          ad: cc.zm.ad
        };
        cc.Tools.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
          cc.log("获取体力奖励");
          cc.zm.userInfo.power = res.data.value;

          if (cc.zm.videoAd.enterGame) {
            cc.director.loadScene('Game');
          }
        });
      } // 看视频得红包


      if (cc.zm.videoAd.redPack) {
        cc.Tools.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.ad.redPack).then(function (res) {
          cc.log("获取红包奖励", res);
          var sendData = {};
          cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
            cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

            if (cc.zm.userInfo.power > 0) {
              cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
                cc.zm.LevelInfo = res.data;
                cc.zm.videoAd.redPack = null; // console.log("关卡信息=", cc.zm.LevelInfo);

                if (cc.zm.LevelInfo.stage < 30) {
                  cc.director.loadScene('Game');
                } else {
                  // 直接返回主界面
                  cc.director.loadScene('Index');
                }
              });
            } else {
              // 小于0 弹出看视频获得体力的接口
              cc.director.loadScene('Index');
            }
          });
        });
      }

      if (cc.zm.videoAd.clickSign) {
        cc.zm.videoAd.clickSign = false;
      }

      if (cc.zm.videoAd.clickTable) {
        cc.zm.videoAd.clickTable = false;
      }
    });
  },
  // 显示激励视频
  showJiliAd: function showJiliAd() {
    cc.log("点击显示激励视频");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "()V");
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
  // 微信登陆
  wxLogin: function wxLogin() {
    cc.log("wxLogin");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
    }
  },

  /**
  * 接收native微信授权的code
  * @param errCode 
  */
  wxLoginResult: function wxLoginResult(errCode) {
    cc.log("wxLoginResultcode=" + errCode);
    cc.wxLoginResultcode = errCode;
  },

  /**
   * 看广告之后刷新一下ecpm
   */
  getUserEcpm: function getUserEcpm(ecpm) {
    if (!cc.zm) {
      return;
    }

    cc.log("调用ecpm=", ecpm);
    return new Promise(function (resolve, reject) {
      var sendData = {
        "ecpm": ecpm,
        "ts": new Date().getTime() //时间戳

      };
      var data = cc.Tools.createSignData(sendData);
      cc.Tools.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then(function (res) {
        cc.log("Ecpm成功", res.data);
        cc.zm.ad = res.data.ad;
        resolve();
      })["catch"](function (res) {
        cc.log("Ecpm失败", res);
        reject(res);
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
    strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi; // var noJiaMi = strToJiaMi;
    // console.log("未加密前=", strToJiaMi)

    var hex_md5 = require("MD5");

    strToJiaMi = hex_md5(strToJiaMi);
    data.sign = strToJiaMi; // console.log("加密后=", strToJiaMi)

    return data;
  },
  // 适配屏幕
  screenAdapter: function screenAdapter() {
    var canvas = cc.find("Canvas").getComponent(cc.Canvas);
    var winSize = cc.view.getVisibleSize();

    if (winSize.height / winSize.width <= 720 / 1280) {
      canvas.fitHeight = true;
      canvas.fitWidth = false;
    } else {
      canvas.fitHeight = false;
      canvas.fitWidth = true;
    }
  },

  /**
   * 
   * @param {*} n node节点
   * @param {*} str  显示的tips内容
   */
  showTips: function showTips(n, str) {
    var tips = n.getChildByName("Tips");
    tips.getComponent(cc.Label).string = str;
    tips.stopAllActions();
    tips.y = 145;
    cc.tween(tips).to(0.1, {
      opacity: 255
    }).to(1, {
      y: 300
    }).delay(0.5).to(0.1, {
      opacity: 0
    }).start();
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
      var requestURL = "https://pit.api.jiankangzhuan.com/" + url;
      xhr.open(type, requestURL, true);

      if (cc.sys.isNative) {
        cc.log("isNative");
        xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
      }

      if (cc.wxToken) {
        xhr.setRequestHeader("Authorization", cc.wxToken);
      }

      xhr.setRequestHeader("Content-Type", "application/json");
      cc.log("requestURL=", requestURL);
      cc.log("data=", JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
          cc.log("http res:" + xhr.response); // 统一处理

          var _response = JSON.parse(xhr.response);

          if (_response.code === 0) {
            resolve(_response);
          } else {
            console.log(_response.message);
            reject(_response.message);
          }
        }
      };

      xhr.onerror = function () {
        reject(new Error(xhr.statusText));
      };

      xhr.send(JSON.stringify(data));
    });
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJUb29scyIsImRvdCIsImV2ZW50IiwicHJvIiwic3lzIiwiaXNOYXRpdmUiLCJsb2ciLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsImFkQ2FsbEJhY2siLCJlY3BtIiwiZ2V0VXNlckVjcG0iLCJ0aGVuIiwiem0iLCJ1c2VySW5mbyIsInBvd2VyIiwic2VuZERhdGEiLCJhZCIsInNlbmRSZXF1ZXN0IiwicmVzIiwiZGF0YSIsInZhbHVlIiwidmlkZW9BZCIsImVudGVyR2FtZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwicmVkUGFjayIsIkxldmVsSW5mbyIsInN0YWdlIiwiY2xpY2tTaWduIiwiY2xpY2tUYWJsZSIsInNob3dKaWxpQWQiLCJzaG93QmFubmVyIiwiaGlkZUJhbm5lciIsInNob3dUYWJsZVNjcmVlbiIsImhpZGVUYWJsZVNjcmVlbiIsInd4TG9naW4iLCJ3eExvZ2luUmVzdWx0IiwiZXJyQ29kZSIsInd4TG9naW5SZXN1bHRjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJEYXRlIiwiZ2V0VGltZSIsImNyZWF0ZVNpZ25EYXRhIiwic29ydExpc3QiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIml0ZW0iLCJwdXNoIiwic29ydCIsInN0clRvSmlhTWkiLCJmb3JFYWNoIiwic2MxIiwiaGV4X21kNSIsInJlcXVpcmUiLCJzaWduIiwic2NyZWVuQWRhcHRlciIsImNhbnZhcyIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJDYW52YXMiLCJ3aW5TaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaXRIZWlnaHQiLCJmaXRXaWR0aCIsInNob3dUaXBzIiwibiIsInN0ciIsInRpcHMiLCJnZXRDaGlsZEJ5TmFtZSIsIkxhYmVsIiwic3RyaW5nIiwic3RvcEFsbEFjdGlvbnMiLCJ5IiwidHdlZW4iLCJ0byIsIm9wYWNpdHkiLCJkZWxheSIsInN0YXJ0IiwidXJsIiwidHlwZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwicmVxdWVzdFVSTCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3hUb2tlbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJfcmVzcG9uc2UiLCJwYXJzZSIsImNvZGUiLCJjb25zb2xlIiwibWVzc2FnZSIsIm9uZXJyb3IiLCJFcnJvciIsInN0YXR1c1RleHQiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsR0FBVztBQUNQO0FBQ0o7QUFDQTtBQUNBO0FBQ0lDLEVBQUFBLEdBTE8sZUFLSEMsS0FMRyxFQUtJQyxHQUxKLEVBS1M7QUFDWixRQUFJSixFQUFFLENBQUNLLEdBQUgsQ0FBT0MsUUFBWCxFQUFxQjtBQUNqQk4sTUFBQUEsRUFBRSxDQUFDTyxHQUFILENBQU8sU0FBU0osS0FBaEI7QUFDQUssTUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDLHFDQUFoQyxFQUF1RSxLQUF2RSxFQUE4RSx1QkFBOUUsRUFBdUdQLEtBQXZHLEVBQThHQyxHQUE5RztBQUNIO0FBQ0osR0FWTTs7QUFZUDtBQUNKO0FBQ0E7QUFDSU8sRUFBQUEsVUFmTyxzQkFlSUMsSUFmSixFQWVVO0FBQ2JaLElBQUFBLEVBQUUsQ0FBQ08sR0FBSCxDQUFPLFFBQVAsRUFEYSxDQUViO0FBQ0E7O0FBQ0EsU0FBS00sV0FBTCxDQUFpQkQsSUFBakIsRUFBdUJFLElBQXZCLENBQTRCLFlBQUk7QUFDNUJkLE1BQUFBLEVBQUUsQ0FBQ08sR0FBSCxDQUFPLGFBQVA7O0FBQ0EsVUFBSVAsRUFBRSxDQUFDZSxFQUFILENBQU1DLFFBQU4sQ0FBZUMsS0FBZixJQUFzQixDQUExQixFQUE2QjtBQUN6QixZQUFJQyxRQUFRLEdBQUc7QUFDWEMsVUFBQUEsRUFB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LENBQWV6RSxJQUFmLENBQVQ7QUFDSCxLQS9CTSxDQUFQO0FBZ0NIO0FBM09NLENBQVgiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLlRvb2xzID0ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQg5pWw5pWw5omT54K555qE5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHsqfSBwcm8g5pWw5pWw5omT54K555qE5YWz6IGU5bGe5oCnXG4gICAgKi9cbiAgICBkb3QoZXZlbnQsIHBybykge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLms6jlhozmiZPngrlcIiArIGV2ZW50KTtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImRvdFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBldmVudCwgcHJvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnnIvop4bpopHlm57osINcbiAgICAgKi9cbiAgICBhZENhbGxCYWNrKGVjcG0pIHtcbiAgICAgICAgY2MubG9nKFwi6KeC55yL6KeG6aKR5Zue6LCDXCIpO1xuICAgICAgICAvLyDojrflj5blub/lkYphZOS5i+WJjeWFiOeUqGVwY3JcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5L2T5YqbXG4gICAgICAgIHRoaXMuZ2V0VXNlckVjcG0oZWNwbSkudGhlbigoKT0+e1xuICAgICAgICAgICAgY2MubG9nKFwi6I635Y+WZWNwbeS5i+WQjuaJjeiwg+eUqFwiKTtcbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlcjw9MCkge1xuICAgICAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWQ6IGNjLnptLmFkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Hcm93UG93ZXJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W5L2T5Yqb5aWW5YqxXCIpXG4gICAgICAgICAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvLnBvd2VyID0gcmVzLmRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDnnIvop4bpopHlvpfnuqLljIVcbiAgICAgICAgICAgIGlmIChjYy56bS52aWRlb0FkLnJlZFBhY2spIHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUGFzc0FkXCIsIFwiUE9TVFwiLCBjYy56bS5hZC5yZWRQYWNrKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W57qi5YyF5aWW5YqxXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS9k+WKm+Wkp+S6jjAg6L+b5YWl5LiL5LiA5YWzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLnZpZGVvQWQucmVkUGFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5YWz5Y2h5L+h5oGvPVwiLCBjYy56bS5MZXZlbEluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLnN0YWdlIDwgMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOMCDlvLnlh7rnnIvop4bpopHojrflvpfkvZPlipvnmoTmjqXlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjYy56bS52aWRlb0FkLmNsaWNrU2lnbil7XG4gICAgICAgICAgICAgICAgY2Muem0udmlkZW9BZC5jbGlja1NpZ24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSl7XG4gICAgICAgICAgICAgICAgY2Muem0udmlkZW9BZC5jbGlja1RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrmv4DlirHop4bpopFcbiAgICBzaG93SmlsaUFkKCkge1xuICAgICAgICBjYy5sb2coXCLngrnlh7vmmL7npLrmv4DlirHop4bpopFcIilcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd0FkXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLpiYW5uZXJcbiAgICBzaG93QmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93QmFubmVyXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDpmpDol49iYW5uZXJcbiAgICBoaWRlQmFubmVyKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlQmFubmVyXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrmj5LlsY/lub/lkYpcbiAgICBzaG93VGFibGVTY3JlZW4oKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dUYWJsZVNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6ZqQ6JeP5o+S5bGP5bm/5ZGKXG4gICAgaGlkZVRhYmxlU2NyZWVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlVGFibGVTY3JlZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOW+ruS/oeeZu+mZhlxuICAgIHd4TG9naW4oKSB7XG4gICAgICAgIGNjLmxvZyhcInd4TG9naW5cIik7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcIndlaXhpbl9sb2dpblwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcIndlaXhpbl9sb2dpblwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgKiDmjqXmlLZuYXRpdmXlvq7kv6HmjojmnYPnmoRjb2RlXG4gICAgKiBAcGFyYW0gZXJyQ29kZSBcbiAgICAqL1xuICAgIHd4TG9naW5SZXN1bHQoZXJyQ29kZSkge1xuICAgICAgICBjYy5sb2coXCJ3eExvZ2luUmVzdWx0Y29kZT1cIiArIGVyckNvZGUpXG4gICAgICAgIGNjLnd4TG9naW5SZXN1bHRjb2RlID0gZXJyQ29kZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeci+W5v+WRiuS5i+WQjuWIt+aWsOS4gOS4i2VjcG1cbiAgICAgKi9cbiAgICAgZ2V0VXNlckVjcG0oZWNwbSkge1xuICAgICAgICAgaWYoIWNjLnptKXtcbiAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG4gICAgICAgICBjYy5sb2coXCLosIPnlKhlY3BtPVwiLGVjcG0pO1xuICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiZWNwbVwiOiBlY3BtLFxuICAgICAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCkvL+aXtumXtOaIs1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuVG9vbHMuY3JlYXRlU2lnbkRhdGEoc2VuZERhdGEpO1xuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1JjXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJFY3Bt5oiQ5YqfXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjYy56bS5hZCA9IHJlcy5kYXRhLmFkO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpPT57XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiRWNwbeWksei0pVwiLCByZXMpO1xuICAgICAgICAgICAgICAgIHJlamVjdChyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEg6ZyA6KaB562+5ZCN5pWw5o2uXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgY3JlYXRlU2lnbkRhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBzb3J0TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT0gXCJzaWduXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgc29ydExpc3QucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNvcnRMaXN0LnNvcnQoKTtcbiAgICAgICAgdmFyIHN0clRvSmlhTWkgPSBcIlwiO1xuICAgICAgICBzb3J0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHN0clRvSmlhTWkgKz0gXCImXCIgKyBrZXkgKyBcIj1cIiArIGRhdGFba2V5XTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHN0clRvSmlhTWkgPSBcInRva2VuPVwiICsgY2Muem0udXNlckluZm8uc2MxICsgc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gdmFyIG5vSmlhTWkgPSBzdHJUb0ppYU1pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuacquWKoOWvhuWJjT1cIiwgc3RyVG9KaWFNaSlcbiAgICAgICAgdmFyIGhleF9tZDUgPSByZXF1aXJlKFwiTUQ1XCIpXG4gICAgICAgIHN0clRvSmlhTWkgPSBoZXhfbWQ1KHN0clRvSmlhTWkpO1xuICAgICAgICBkYXRhLnNpZ24gPSBzdHJUb0ppYU1pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWKoOWvhuWQjj1cIiwgc3RyVG9KaWFNaSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICB9LFxuICAgIC8vIOmAgumFjeWxj+W5lVxuICAgIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcblxuICAgICAgICBpZiAod2luU2l6ZS5oZWlnaHQgLyB3aW5TaXplLndpZHRoIDw9IDcyMCAvIDEyODApIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IG4gbm9kZeiKgueCuVxuICAgICAqIEBwYXJhbSB7Kn0gc3RyICDmmL7npLrnmoR0aXBz5YaF5a65XG4gICAgICovXG4gICAgc2hvd1RpcHMobixzdHIpIHtcbiAgICAgICAgbGV0IHRpcHMgPSBuLmdldENoaWxkQnlOYW1lKFwiVGlwc1wiKTtcbiAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9c3RyO1xuICAgICAgICB0aXBzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRpcHMueSA9IDE0NTtcbiAgICAgICAgY2MudHdlZW4odGlwcykudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS50bygxLCB7IHk6IDMwMCB9KS5kZWxheSgwLjUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gdXJsIOivt+axguaOpeWPo+eahHVybC0tLS1waXQudjEuUGl0U3ZjL1VzZXJJbmZvXG4gICAgICogQHBhcmFtIHsqfSB0eXBlIOivt+axguaOpeWPo+eahOexu+WeiyDlj6rog73mmK9HRVQtLVBPU1RcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEg6K+35rGC5o6l5Y+j5omA6ZyA6KaB55qE5pWw5o2uXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uICh1cmwsIHR5cGUsZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgbGV0IHJlcXVlc3RVUkwgPSBcImh0dHBzOi8vcGl0LmFwaS5qaWFua2FuZ3podWFuLmNvbS9cIiArIHVybDtcbiAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHJlcXVlc3RVUkwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImlzTmF0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kZWluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNjLnd4VG9rZW4pe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBjYy53eFRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgICAgIGNjLmxvZyhcInJlcXVlc3RVUkw9XCIsIHJlcXVlc3RVUkwpO1xuICAgICAgICAgICAgY2MubG9nKFwiZGF0YT1cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiaHR0cCByZXM6XCIgKyB4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyDnu5/kuIDlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9yZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoX3Jlc3BvbnNlLmNvZGU9PT0wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3Jlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKF9yZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChfcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHhoci5zdGF0dXNUZXh0KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a8c0/npapCw52O67NIaoqR', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZUJ5LmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlQnkiLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCLElBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiB2ZXJzaW9ucy5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLkFjdGlvbiBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiDniYjmnKznmoTlt6XnqIvvvIxcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIEFjdGlvbu+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcbiAqL1xuXG5jYy5Sb3RhdGVCeS5fcmV2ZXJzZSA9IHRydWU7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b7cdHix81Ol6r4h+cnHYQh', 'login');
// Script/login.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.protocol = false;
    this.needLogin = true;
    this.time = 0;

    if (!cc.sys.isNative) {
      cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4");
    }

    if (cc.sys.localStorage.getItem("token")) {
      this.needLogin = false;
      this.protocol = true;
      cc.wxToken = cc.sys.localStorage.getItem("token");

      if (cc.sys.isNative) {
        if (cc.sys.localStorage.getItem("realName")) {
          cc.director.loadScene('Index');
        } else {
          this.showRealLayer();
        }
      } else {
        cc.director.loadScene('Index');
      }
    }
  },
  onLoginWX: function onLoginWX() {
    if (cc.sys.isNative) {
      if (this.protocol) {
        cc.Tools.wxLogin();
      } else {
        cc.Tools.showTips(this.node, "请先同意用户协议和隐私政策");
      }
    }
  },
  // 选择用户协议
  clickProtocol: function clickProtocol(e) {
    var target = e.target;
    var right = target.getChildByName("right");

    if (this.protocol) {
      right.active = false;
      this.protocol = false;
    } else {
      right.active = true;
      this.protocol = true;
    }
  },
  update: function update(dt) {
    var _this = this;

    this.time += dt;

    if (!this.needLogin) {
      return;
    }

    if (this.time >= 1) {
      this.time = 0;

      if (cc.wxLoginResultcode && this.protocol) {
        this.protocol = false;
        var data = {
          "channel": "1",
          "imei": "1",
          "mac": "1",
          "distinct_id": "1",
          "oaid": "1",
          "android_id": "1",
          "code": cc.wxLoginResultcode
        };
        cc.Tools.sendRequest("pit.v1/register", "POST", data).then(function (res) {
          cc.wxToken = res.data.token;
          cc.sys.localStorage.setItem("token", res.data.token);
          cc.Tools.dot("register", {
            register_time: new Date(),
            channel: "微信"
          });

          if (cc.sys.localStorage.getItem("realName")) {
            cc.director.loadScene('Index');
          } else {
            _this.showRealLayer();
          }
        });
      }
    }
  },
  // 显示用户协议
  showUserProtocol: function showUserProtocol() {
    var protocol = this.node.getChildByName("user_protocol");
    protocol.active = true;
  },
  hideUserProtocol: function hideUserProtocol() {
    var protocol = this.node.getChildByName("user_protocol");
    protocol.active = false;
  },
  // 显示隐私政策
  showUserPrivacy: function showUserPrivacy() {
    var privacy = this.node.getChildByName("user_privacy");
    privacy.active = true;
  },
  hideUserPrivacy: function hideUserPrivacy() {
    var privacy = this.node.getChildByName("user_privacy");
    privacy.active = false;
  },
  // 实名认证
  showRealLayer: function showRealLayer() {
    this.realNameLayer = this.node.getChildByName("RealName");
    this.realNameLayer.active = true;
  },
  // 实名认证点击
  clickRealLayer: function clickRealLayer(e) {
    var target = e.target;
    var _realName = this.realNameLayer.getChildByName("edit1").getComponent(cc.EditBox).string;
    var _realNumber = this.realNameLayer.getChildByName("edit2").getComponent(cc.EditBox).string;
    cc.log("\u771F\u5B9E\u59D3\u540D" + _realName + "------\u8EAB\u4EFD\u8BC1\u53F7" + _realNumber); // 用local记录 是否实名

    if (this.regYourName(_realName) && this.regYourNumber(_realNumber)) {
      cc.log("认证成功");
      cc.sys.localStorage.setItem("realName", true);
      cc.director.loadScene('Index');
    }
  },
  // 判断真实姓名
  regYourName: function regYourName(name) {
    var regName = /^[\u4e00-\u9fa5]{2,4}$/;

    if (!regName.test(name)) {
      cc.Tools.showTips(this.node, "真实姓名填写有误");
      return false;
    }

    return true;
  },
  // 判断身份证号
  regYourNumber: function regYourNumber(num) {
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    if (!regIdNo.test(num)) {
      cc.Tools.showTips(this.node, '身份证号填写有误');
      return false;
    }

    return true;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInByb3RvY29sIiwibmVlZExvZ2luIiwidGltZSIsInN5cyIsImlzTmF0aXZlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJ3eFRva2VuIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzaG93UmVhbExheWVyIiwib25Mb2dpbldYIiwiVG9vbHMiLCJ3eExvZ2luIiwic2hvd1RpcHMiLCJub2RlIiwiY2xpY2tQcm90b2NvbCIsImUiLCJ0YXJnZXQiLCJyaWdodCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwidXBkYXRlIiwiZHQiLCJ3eExvZ2luUmVzdWx0Y29kZSIsImRhdGEiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJ0b2tlbiIsImRvdCIsInJlZ2lzdGVyX3RpbWUiLCJEYXRlIiwiY2hhbm5lbCIsInNob3dVc2VyUHJvdG9jb2wiLCJoaWRlVXNlclByb3RvY29sIiwic2hvd1VzZXJQcml2YWN5IiwicHJpdmFjeSIsImhpZGVVc2VyUHJpdmFjeSIsInJlYWxOYW1lTGF5ZXIiLCJjbGlja1JlYWxMYXllciIsIl9yZWFsTmFtZSIsImdldENvbXBvbmVudCIsIkVkaXRCb3giLCJzdHJpbmciLCJfcmVhbE51bWJlciIsImxvZyIsInJlZ1lvdXJOYW1lIiwicmVnWW91ck51bWJlciIsIm5hbWUiLCJyZWdOYW1lIiwidGVzdCIsIm51bSIsInJlZ0lkTm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdHO0FBQ0osU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFNB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QXhDO0FBQ0FYLE1BQUFBLEVBQUUsQ0FBQ2MsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE9BQXRCO0FBQ0g7QUFDSixHQXhISTtBQXlITDtBQUNBc0MsRUFBQUEsV0ExSEssdUJBMEhPRSxJQTFIUCxFQTBIYTtBQUNkLFFBQUlDLE9BQU8sR0FBRyx3QkFBZDs7QUFDQSxRQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhRixJQUFiLENBQUwsRUFBeUI7QUFDckJ2RCxNQUFBQSxFQUFFLENBQUNrQixLQUFILENBQVNFLFFBQVQsQ0FBa0IsS0FBS0MsSUFBdkIsRUFBNEIsVUFBNUI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQWpJSTtBQWtJTDtBQUNBaUMsRUFBQUEsYUFuSUsseUJBbUlTSSxHQW5JVCxFQW1JYztBQUNmLFFBQUlDLE9BQU8sR0FBRywwQ0FBZDs7QUFDQSxRQUFJLENBQUNBLE9BQU8sQ0FBQ0YsSUFBUixDQUFhQyxHQUFiLENBQUwsRUFBd0I7QUFDcEIxRCxNQUFBQSxFQUFFLENBQUNrQixLQUFILENBQVNFLFFBQVQsQ0FBa0IsS0FBS0MsSUFBdkIsRUFBNEIsVUFBNUI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQTFJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZWVkTG9naW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpveE1EQXhNVGN4TENKdmNHVnVYMmxrSWpvaWIxRlhORkkxT1ZWU1JsRjFZVE5TV2psdlgzbGZkR0o2VUVkTE5DSXNJbTVwWTJ0ZmJtRnRaU0k2SXVhMXQtZWJsLWlJdWVtVnZ6SXVNQ0lzSW1kbGJtUmxjaUk2TVN3aVlYWmhkR0Z5SWpvaWFIUjBjSE02THk5MGFHbHlaSGQ0TG5Gc2IyZHZMbU51TDIxdGIzQmxiaTkyYVY4ek1pOW1SMHhrUjFwbmVHNXdWbXRKUWxkamFXRXplV2xqYVdKNmFXSkZRMEowVnpGaFFraEViVWRoV21WNmNUQXljV2RRVVVOM1NUTjVPR2xqVkU1bldFdENjREJPY0V4Qk5VSkZkRFo2VUVkc1NHMVZUV1k1YkhkNFFrMW5MekV6TWlJc0ltTnlaV0YwWlY5MGFXMWxJam93TENKamFHRnVibVZzSWpvaU1TSXNJbVJwYzNScGJtTjBYMmxrSWpvaU1TSjkuSzVDOVhTa0VFakJCZlBGbjFtNUJvWEd1MTF1YlBjOWxTdkRSQUhrdl9WNFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xuICAgICAgICAgICAgdGhpcy5uZWVkTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2wgPSB0cnVlO1xuICAgICAgICAgICAgY2Mud3hUb2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVhbE5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlYWxMYXllcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Mb2dpbldYKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnd4TG9naW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLFwi6K+35YWI5ZCM5oSP55So5oi35Y2P6K6u5ZKM6ZqQ56eB5pS/562WXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAieaLqeeUqOaIt+WNj+iurlxuICAgIGNsaWNrUHJvdG9jb2woZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCByaWdodCA9IHRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpO1xuICAgICAgICBpZiAodGhpcy5wcm90b2NvbCkge1xuICAgICAgICAgICAgcmlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb3RvY29sID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLnRpbWUgKz0gZHQ7XG4gICAgICAgIGlmICghdGhpcy5uZWVkTG9naW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgICAgICBpZiAoY2Mud3hMb2dpblJlc3VsdGNvZGUgJiYgdGhpcy5wcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvdG9jb2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjaGFubmVsXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImltZWlcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFjXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3RpbmN0X2lkXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9haWRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZF9pZFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2RlXCI6IGNjLnd4TG9naW5SZXN1bHRjb2RlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxL3JlZ2lzdGVyXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud3hUb2tlbiA9IHJlcy5kYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXMuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcInJlZ2lzdGVyXCIsIHsgcmVnaXN0ZXJfdGltZTogbmV3IERhdGUoKSwgY2hhbm5lbDogXCLlvq7kv6FcIiB9KVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVhbE5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlYWxMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S655So5oi35Y2P6K6uXG4gICAgc2hvd1VzZXJQcm90b2NvbCgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJvdG9jb2xcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy8g5pi+56S66ZqQ56eB5pS/562WXG4gICAgc2hvd1VzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJpdmFjeSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgcHJpdmFjeS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZVVzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJpdmFjeSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgcHJpdmFjeS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOWunuWQjeiupOivgVxuICAgIHNob3dSZWFsTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucmVhbE5hbWVMYXllciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJlYWxOYW1lXCIpO1xuICAgICAgICB0aGlzLnJlYWxOYW1lTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOWunuWQjeiupOivgeeCueWHu1xuICAgIGNsaWNrUmVhbExheWVyKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgX3JlYWxOYW1lID0gdGhpcy5yZWFsTmFtZUxheWVyLmdldENoaWxkQnlOYW1lKFwiZWRpdDFcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgbGV0IF9yZWFsTnVtYmVyID0gdGhpcy5yZWFsTmFtZUxheWVyLmdldENoaWxkQnlOYW1lKFwiZWRpdDJcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgY2MubG9nKGDnnJ/lrp7lp5PlkI0ke19yZWFsTmFtZX0tLS0tLS3ouqvku73or4Hlj7cke19yZWFsTnVtYmVyfWApO1xuICAgICAgICAvLyDnlKhsb2NhbOiusOW9lSDmmK/lkKblrp7lkI1cbiAgICAgICAgaWYodGhpcy5yZWdZb3VyTmFtZShfcmVhbE5hbWUpJiZ0aGlzLnJlZ1lvdXJOdW1iZXIoX3JlYWxOdW1iZXIpKXtcbiAgICAgICAgICAgIGNjLmxvZyhcIuiupOivgeaIkOWKn1wiKTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlYWxOYW1lXCIsIHRydWUpXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWIpOaWreecn+WunuWnk+WQjVxuICAgIHJlZ1lvdXJOYW1lKG5hbWUpIHtcbiAgICAgICAgdmFyIHJlZ05hbWUgPSAvXltcXHU0ZTAwLVxcdTlmYTVdezIsNH0kLztcbiAgICAgICAgaWYgKCFyZWdOYW1lLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSxcIuecn+WunuWnk+WQjeWhq+WGmeacieivr1wiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICAvLyDliKTmlq3ouqvku73or4Hlj7dcbiAgICByZWdZb3VyTnVtYmVyKG51bSkge1xuICAgICAgICB2YXIgcmVnSWRObyA9IC8oXlxcZHsxNX0kKXwoXlxcZHsxOH0kKXwoXlxcZHsxN30oXFxkfFh8eCkkKS87XG4gICAgICAgIGlmICghcmVnSWROby50ZXN0KG51bSkpIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwn6Lqr5Lu96K+B5Y+35aGr5YaZ5pyJ6K+vJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59KTtcblxuXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Hook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d771RnIftD4KOCJTnyU0cq', 'Hook');
// Script/Hook.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  //这个只是当前挂在了这个组件的节点初始完成执行，start 是所有节点初始完成执行
  // onLoad () {},
  start: function start() {
    //初始化 放到update里执行，必须等待canvas的prefab加载完事后才执行初始化
    this.init();
  },

  /**
   * @description 初始化 所有东西需要在动态资源加载完成后进行初始化
   */
  init: function init() {
    //获取Main 组件 需要先获取节点
    this.Canvas = cc.find('Canvas');
    this.Main = this.Canvas.getComponent('Main');
    this.Prefab = this.Main.Prefab; //获取钩子下item节点

    this.Item = cc.find('Canvas/Header/Miner/Hook/item'); //监听碰撞

    this.onCollisionEnter = this.onCollisionEnterA;
  },

  /**
   * @description 监听碰撞
   * @param {Object} other 其他与本节点碰撞的节点
   * @param {Object} self 本节点
   */
  onCollisionEnterA: function onCollisionEnterA(other, self) {
    if (this.Main.HookState == 2) return;
    this.other = other;
    this.isWall = this.Wall(other);
    this.isTnt = this.Tnt(other);
    this.isMouse = this.Mouse(other); //处理钩子撞墙

    if (this.isWall) {
      //拉回钩子
      this.Main.PullBackHook();
      return;
    }

    ;

    if (this.isTnt) {
      this.Main.destroyTnt(other.node);
      other.node.getChildByName("icon").active = false;
      var boom = other.node.boom;
      boom.active = true;
      boom.getComponent(cc.Animation).play("boom");

      if (cc.zm.showShake) {
        if (cc.sys.isNative) {
          jsb.Device.vibrate(0.3);
        }
      }
    }

    if (this.isMouse) {
      other.node.stopAllActions();
    } //根据物品设置拉回钩子速度


    this.Main.SetSpeed(other); //播放碰撞音效

    if (cc.zm.showMusic) {
      cc.audioEngine.play(this.Main.CollisionAudio);
    } //将物品放置钩子上


    this.other.node.y = -(this.Main.Hook.height + 2);
    this.other.node.x = -(this.Main.Hook.width / 2);
    other.node.parent = this.Item;
    other.node.anchorY = 1;
    this.node.getComponent(cc.Sprite).spriteFrame = this.Main.HookFrames[1];
    this.Main.PullBackHook();
  },

  /**
   * @description 删除被勾中的物品再创建被勾中的物品
   */
  MoveItemToHook: function MoveItemToHook() {
    if (this.isWall) return; // if(this.isTnt)return;

    this.other.node.y = -(this.Main.Hook.height + 2);
    this.other.node.x = -(this.Main.Hook.width / 2);
  },

  /**
   * @description 返回钩子是否撞墙
   */
  Wall: function Wall(other) {
    return other.node.group == 'Wall';
  },

  /**
   * @description 返回是否是炸药桶
   */
  Tnt: function Tnt(other) {
    return other.node.group == 'Tnt';
  },
  Mouse: function Mouse(other) {
    return other.node.group == 'Mouse';
  },
  update: function update(dt) {
    if (this.other && this.other.node && this.Main.HookState == 2) {
      this.MoveItemToHook();
    }

    ;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSG9vay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5pdCIsIkNhbnZhcyIsImZpbmQiLCJNYWluIiwiZ2V0Q29tcG9uZW50IiwiUHJlZmFiIiwiSXRlbSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvbkNvbGxpc2lvbkVudGVyQSIsIm90aGVyIiwic2VsZiIsIkhvb2tTdGF0ZSIsImlzV2FsbCIsIldhbGwiLCJpc1RudCIsIlRudCIsImlzTW91c2UiLCJNb3VzZSIsIlB1bGxCYWNrSG9vayIsImRlc3Ryb3lUbnQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJib29tIiwiQW5pbWF0aW9uIiwicGxheSIsInptIiwic2hvd1NoYWtlIiwic3lzIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwic3RvcEFsbEFjdGlvbnMiLCJTZXRTcGVlZCIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwiQ29sbGlzaW9uQXVkaW8iLCJ5IiwiSG9vayIsImhlaWdodCIsIngiLCJ3aWR0aCIsInBhcmVudCIsImFuY2hvclkiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkhvb2tGcmFtZXMiLCJNb3ZlSXRlbVRvSG9vayIsImdyb3VwIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUw7QUFDQTtBQUNBO0FBRUFDLEVBQUFBLEtBVkssbUJBVUk7QUFDTDtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQWJJOztBQWNMO0FBQ0o7QUFDQTtBQUNJQSxFQUFBQSxJQWpCSyxrQkFpQkM7QUFDRjtBQUNBLFNBQUtDLE1BQUwsR0FBY04sRUFBRSxDQUFDTyxJQUFILENBQVEsUUFBUixDQUFk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LyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIC8v6L+Z5Liq5Y+q5piv5b2T5YmN5oyC5Zyo5LqG6L+Z5Liq57uE5Lu255qE6IqC54K55Yid5aeL5a6M5oiQ5omn6KGM77yMc3RhcnQg5piv5omA5pyJ6IqC54K55Yid5aeL5a6M5oiQ5omn6KGMXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvL+WIneWni+WMliDmlL7liLB1cGRhdGXph4zmiafooYzvvIzlv4XpobvnrYnlvoVjYW52YXPnmoRwcmVmYWLliqDovb3lrozkuovlkI7miY3miafooYzliJ3lp4vljJZcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOaJgOacieS4nOilv+mcgOimgeWcqOWKqOaAgei1hOa6kOWKoOi9veWujOaIkOWQjui/m+ihjOWIneWni+WMllxuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgICAgLy/ojrflj5ZNYWluIOe7hOS7tiDpnIDopoHlhYjojrflj5boioLngrlcbiAgICAgICAgdGhpcy5DYW52YXMgPSBjYy5maW5kKCdDYW52YXMnKTtcbiAgICAgICAgdGhpcy5NYWluID0gdGhpcy5DYW52YXMuZ2V0Q29tcG9uZW50KCdNYWluJyk7XG4gICAgICAgIHRoaXMuUHJlZmFiID0gdGhpcy5NYWluLlByZWZhYjtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDkuItpdGVt6IqC54K5XG4gICAgICAgIHRoaXMuSXRlbSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvTWluZXIvSG9vay9pdGVtJyk7XG4gICAgICAgIC8v55uR5ZCs56Kw5pKeXG4gICAgICAgIHRoaXMub25Db2xsaXNpb25FbnRlciA9IHRoaXMub25Db2xsaXNpb25FbnRlckE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDnm5HlkKznorDmkp5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3RoZXIg5YW25LuW5LiO5pys6IqC54K556Kw5pKe55qE6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGYg5pys6IqC54K5XG4gICAgICovXG4gICAgb25Db2xsaXNpb25FbnRlckEob3RoZXIsIHNlbGYpe1xuICAgICAgICBpZih0aGlzLk1haW4uSG9va1N0YXRlID09IDIpcmV0dXJuO1xuICAgICAgICB0aGlzLm90aGVyID0gb3RoZXI7XG4gICAgICAgIHRoaXMuaXNXYWxsID0gdGhpcy5XYWxsKG90aGVyKTtcbiAgICAgICAgdGhpcy5pc1RudCA9IHRoaXMuVG50KG90aGVyKTtcbiAgICAgICAgdGhpcy5pc01vdXNlID0gdGhpcy5Nb3VzZShvdGhlcik7XG4gICAgICAgIC8v5aSE55CG6ZKp5a2Q5pKe5aKZXG4gICAgICAgIGlmKHRoaXMuaXNXYWxsKXtcbiAgICAgICAgICAgIC8v5ouJ5Zue6ZKp5a2QXG4gICAgICAgICAgICB0aGlzLk1haW4uUHVsbEJhY2tIb29rKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuaXNUbnQpe1xuICAgICAgICAgICAgdGhpcy5NYWluLmRlc3Ryb3lUbnQob3RoZXIubm9kZSk7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBib29tID0gb3RoZXIubm9kZS5ib29tO1xuICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcbiAgICAgICAgICAgIGlmKGNjLnptLnNob3dTaGFrZSl7XG4gICAgICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNNb3VzZSl7XG4gICAgICAgICAgICBvdGhlci5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/moLnmja7nianlk4Horr7nva7mi4nlm57pkqnlrZDpgJ/luqZcbiAgICAgICAgdGhpcy5NYWluLlNldFNwZWVkKG90aGVyKTtcbiAgICAgICAgLy/mkq3mlL7norDmkp7pn7PmlYhcbiAgICAgICAgaWYoY2Muem0uc2hvd011c2ljKXtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5NYWluLkNvbGxpc2lvbkF1ZGlvKTtcbiAgICAgICAgfVxuICAgICAgICAvL+WwhueJqeWTgeaUvue9rumSqeWtkOS4ilxuICAgICAgICB0aGlzLm90aGVyLm5vZGUueSA9IC0odGhpcy5NYWluLkhvb2suaGVpZ2h0ICsgMik7XG4gICAgICAgIHRoaXMub3RoZXIubm9kZS54ID0gLSh0aGlzLk1haW4uSG9vay53aWR0aCAvIDIpO1xuICAgICAgICBvdGhlci5ub2RlLnBhcmVudCA9IHRoaXMuSXRlbTtcbiAgICAgICAgb3RoZXIubm9kZS5hbmNob3JZID0gMTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluLkhvb2tGcmFtZXNbMV1cbiAgICAgICAgdGhpcy5NYWluLlB1bGxCYWNrSG9vaygpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIoOmZpOiiq+WLvuS4reeahOeJqeWTgeWGjeWIm+W7uuiiq+WLvuS4reeahOeJqeWTgVxuICAgICAqL1xuICAgIE1vdmVJdGVtVG9Ib29rKCl7XG4gICAgICAgIGlmKHRoaXMuaXNXYWxsKXJldHVybjtcbiAgICAgICAgLy8gaWYodGhpcy5pc1RudClyZXR1cm47XG4gICAgICAgIHRoaXMub3RoZXIubm9kZS55ID0gLSh0aGlzLk1haW4uSG9vay5oZWlnaHQgKyAyKTtcbiAgICAgICAgdGhpcy5vdGhlci5ub2RlLnggPSAtKHRoaXMuTWFpbi5Ib29rLndpZHRoIC8gMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDov5Tlm57pkqnlrZDmmK/lkKbmkp7loplcbiAgICAgKi9cbiAgICBXYWxsKG90aGVyKXtcbiAgICAgICAgcmV0dXJuIG90aGVyLm5vZGUuZ3JvdXAgPT0gJ1dhbGwnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOi/lOWbnuaYr+WQpuaYr+eCuOiNr+ahtlxuICAgICAqL1xuICAgICBUbnQob3RoZXIpe1xuICAgICAgICByZXR1cm4gb3RoZXIubm9kZS5ncm91cCA9PSAnVG50JztcbiAgICB9LFxuICAgIE1vdXNlKG90aGVyKXtcbiAgICAgICAgcmV0dXJuIG90aGVyLm5vZGUuZ3JvdXAgPT0gJ01vdXNlJztcbiAgICB9LFxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5vdGhlciAmJiB0aGlzLm90aGVyLm5vZGUgJiYgdGhpcy5NYWluLkhvb2tTdGF0ZSA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMuTW92ZUl0ZW1Ub0hvb2soKTtcbiAgICAgICAgfTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/IndexMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec6barLP8hJ4Lk8WUBUuH5V', 'IndexMain');
// Script/IndexMain.js

"use strict";

// const http = require("Http");
var AWARD = cc.Enum({
  DAY_1: 0,
  DAY_2: 1,
  DAY_3: 2,
  DAY_4: 3,
  DAY_5: 4,
  DAY_6: 5,
  DAY_7: 6,
  RED_5: 7,
  RED_10: 8,
  BOOM: 9,
  LOCK: 10,
  SHOUCE: 11,
  POWER: 12
});
cc.Class({
  "extends": cc.Component,
  properties: {
    BGM: {
      "default": null,
      type: cc.AudioClip
    },
    SevenFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    AwardFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    TextFrames: {
      type: cc.SpriteFrame,
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //关闭FPS面板
    // cc.director.setDisplayStats(false);
    cc.zm = {};
    cc.zm.videoAd = {}; // 签到标记

    cc.zm.videoAd.clickSign = true; // 转盘标记

    cc.zm.videoAd.clickTable = true; // 增加屏幕视频

    cc.Tools.screenAdapter(); // 进入主界面打点

    cc.Tools.dot("enter_main"); // 判断是否是第一次进入游戏 如果第一次进入那么弹出First弹窗

    var firstLayer = cc.find('Canvas/First');
    firstLayer.active = false;

    var _first = cc.sys.localStorage.getItem("first");

    if (!_first) {
      cc.sys.localStorage.setItem("first", true);
      this.scheduleOnce(function () {
        firstLayer.scale = 0;
        firstLayer.active = true;
        cc.tween(firstLayer).to(0.5, {
          scale: 1
        }).start();
      }, 1);
    } //监听开始游戏
    // 设置界面


    this.SetLayer = cc.find('Canvas/SetLayer'); // 签到界面

    this.SignLayer = cc.find('Canvas/SignLayer'); // 大转盘界面

    this.TurntableLayer = cc.find('Canvas/TurntableLayer'); // 存钱罐界面 提现也是这个界面

    this.GetMonetyLayer = cc.find('Canvas/GetMoneyLayer'); // 七日任务

    this.SevenWorkLayer = cc.find("Canvas/SevenWorkLayer"); // 奖池红包界面

    this.RedPoolLayer = cc.find("Canvas/RedPoolLayer"); // 获取物品的弹窗

    this.GetGoodLayer = cc.find("Canvas/GetGood"); // 看视频得奖励界面

    this.SeeVideolayer = cc.find("Canvas/SeeVideolayer"); // 重置关卡界面

    this.ResumeLayer = cc.find("Canvas/ResumeLayer");
    cc.zm.showMusic = true;
    cc.zm.showShake = true;
    this.countDownTime = 0;
    this.signNumber = 0;
    this.BGM_ID = cc.audioEngine.play(this.BGM); //预加载场景2

    cc.director.preloadScene('Game'); // 新手引导

    var guide = cc.find('Canvas/Guide');
    guide.active = false;
    guide.getChildByName("guide_0").active = false;
    guide.getChildByName("guide_4").active = false;

    if (cc.sys.localStorage.getItem("guide") !== "over") {
      if (!cc.sys.localStorage.getItem("guide")) {
        this.guide = true;
        guide.active = true;
        guide.getChildByName("guide_0").active = true;
      }

      if (cc.sys.localStorage.getItem("guide") === '4') {
        this.guide = false;
        guide.active = true;
        guide.getChildByName("guide_4").active = true;
      }
    } // 显示banner广告


    cc.Tools.showBanner(); // 获取用户信息

    this.getUserInfo(); // 记录打点的值
    // 签到打点

    this.sign_in_acti = 0; // 转盘打点

    this.turntable_acti = 0; // 提现打点

    this.cash_out_acti = 0; // 存钱罐打点

    this.bank_acti = 0; // 奖池红包打点

    this.jackpot_acti = 0; // 开始游戏打点

    this.level_start = 0;
  },
  getUserInfo: function getUserInfo() {
    var _this = this;

    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      _this.userInfo = res.data;
      cc.zm.userInfo = _this.userInfo;
      cc.log("cocos user info " + _this.userInfo); // 注册打点

      cc.Tools.dot("sign_in", {
        sigsign_in_time: new Date()
      });

      _this.showIndexLayer(); // 体力是否倒计时


      _this.PowerTime(); // todo test
      //  cc.Tools.adCallBack();

    });
  },
  PowerTime: function PowerTime() {
    var time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);

    if (cc.zm.userInfo.power < 5) {
      // 现在才会倒计时
      // 先获取
      this.schedule(this.PowerTimeSchedule, 1);
    } else {
      time.string = "00:00";
      this.unschedule(this.PowerTimeSchedule);
    }
  },
  PowerTimeSchedule: function PowerTimeSchedule() {
    if (cc.zm.userInfo.power_sec <= 0) {
      this.unschedule(this.PowerTimeSchedule); // 在获取用户信息 是否体力满 没有满接着倒计时

      this.getUserInfo();
    } else {
      // 每一秒更新倒计时
      var time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);
      time.string = this.changeSecond(cc.zm.userInfo.power_sec);
      cc.zm.userInfo.power_sec--;
    }
  },
  // 写一个算法 将秒数传进来生成一个00:00形式的字符串
  changeSecond: function changeSecond(s) {
    var minute = "0" + Math.floor(s / 60);
    var second = s % 60 >= 10 ? s % 60 : "0" + s % 60;
    return minute + ":" + second;
  },
  guideOver: function guideOver() {
    cc.find('Canvas/Guide').active = false;
    cc.sys.localStorage.setItem("guide", "over");
  },
  StartGame: function StartGame() {
    var _this2 = this;

    //关闭BGM
    // cc.zm.userInfo.win = true;
    cc.audioEngine.stop(this.BGM_ID); //清空关卡数 不清空关卡

    if (this.guide) {
      cc.sys.localStorage.setItem("guide", 1);
    } //跳转场景
    // 开始游戏之前 先获取关卡信息 如果没有关卡信息不进入游戏


    cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
      _this2.level_start++;
      var dotData = {
        sign_in_acti: _this2.sign_in_acti,
        turntable_acti: _this2.turntable_acti,
        cash_out_acti: _this2.cash_out_acti,
        bank_acti: _this2.bank_acti,
        jackpot_acti: _this2.jackpot_acti,
        level_start: _this2.level_start
      };
      cc.Tools.dot("click", dotData);
      cc.zm.LevelInfo = res.data;
      console.log("关卡信息=", cc.zm.LevelInfo); // 判断

      if (cc.zm.userInfo.power <= 0) {
        // 显示看视频获得体力界面
        _this2.showSeeVideolayer();
      } else {
        cc.director.loadScene("Game");
      }
    });
  },
  showSeeVideolayer: function showSeeVideolayer() {
    cc.Tools.showBanner();
    this.SeeVideolayer.active = true;
  },
  // 看视频得奖励
  seeVideoAward: function seeVideoAward() {
    cc.zm.videoAd.enterGame = false;
    cc.Tools.showJiliAd();
    this.SeeVideolayer.active = false;
  },
  // 显示签到界面
  showSignLayer: function showSignLayer() {
    var _this3 = this;

    // 先获取签到列表
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/SignInList", "GET", sendData).then(function (res) {
      var items = res.data.items; // 签到按钮打点

      cc.Tools.showBanner();
      _this3.sign_in_acti++;
      var dotData = {
        sign_in_acti: _this3.sign_in_acti,
        turntable_acti: _this3.turntable_acti,
        cash_out_acti: _this3.cash_out_acti,
        bank_acti: _this3.bank_acti,
        jackpot_acti: _this3.jackpot_acti,
        level_start: _this3.level_start
      };
      cc.Tools.dot("click", dotData);
      _this3.signDay = res.data.day;
      _this3.SignLayer.active = true;

      for (var i = 1; i <= 7; i++) {
        var dayNode = _this3.SignLayer.getChildByName("day_" + i);

        var _data = items[i - 1];

        if (_data.status) {
          _this3.completeBtn(dayNode);
        } else {
          if (i === _this3.signDay) {
            _this3.selectBtn(dayNode);
          } else {
            _this3.unSelectBtn(dayNode);
          }
        }
      }
    });
  },
  // 显示设置界面
  showSetLayer: function showSetLayer() {
    this.SetLayer.active = true; // 获取用户信息

    cc.Tools.showBanner();
    var nickName = this.SetLayer.getChildByName("nikename").getComponent(cc.Label);
    nickName.string = this.userInfo.nick_name;
    var userId = this.SetLayer.getChildByName("userid").getComponent(cc.Label);
    userId.string = "\u7528\u6237ID\uFF1A" + this.userInfo.user_id; // icon

    var icon = this.SetLayer.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite);
    var remoteUrl = this.userInfo.avatar_url;
    cc.assetManager.loadRemote(remoteUrl, {
      ext: '.png'
    }, function (err, texture) {
      // Use texture to create sprite frame
      icon.spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  // 显示主界面
  showIndexLayer: function showIndexLayer() {
    // 隐藏banner
    cc.Tools.hideBanner(); // 红包的数量

    cc.find("Canvas/Index/GetMoney/lbl").getComponent(cc.Label).string = this.userInfo.red_pack;
    cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power; // 元宝的个数

    cc.find("Canvas/Index/YuanBao/lbl").getComponent(cc.Label).string = this.userInfo.gc;
    cc.find("Canvas/Index/Gold/lbl").getComponent(cc.Label).string = this.userInfo.score; // cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power

    var btnCom = cc.find("Canvas/Index/BeginGame").getComponent(cc.Button);

    if (cc.zm.userInfo.win) {
      btnCom.enableAutoGrayEffect = true;
      btnCom.interactable = false;
    } else {
      btnCom.interactable = true;
    }
  },
  // 显示大转盘界面
  showTurntableLayer: function showTurntableLayer() {
    var _this4 = this;

    // 显示大转盘之前获取用户信息接口
    this.point = this.TurntableLayer.getChildByName("Pointer");
    this.point.angle = 360;
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      cc.Tools.showBanner();
      _this4.turntable_acti++;
      var dotData = {
        sign_in_acti: _this4.sign_in_acti,
        turntable_acti: _this4.turntable_acti,
        cash_out_acti: _this4.cash_out_acti,
        bank_acti: _this4.bank_acti,
        jackpot_acti: _this4.jackpot_acti,
        level_start: _this4.level_start
      };
      cc.Tools.dot("click", dotData);
      cc.zm.userInfo = res.data;
      _this4.TurntableLayer.active = true;

      var btnCom = _this4.TurntableLayer.getChildByName("beginBtn").getComponent(cc.Button);

      if (cc.zm.userInfo.sec < 0) {
        // 有倒计时 开始倒计时 todo
        // 此时转盘点击按钮 置灰且不可点击
        btnCom.enableAutoGrayEffect = true;
        btnCom.interactable = false;
        _this4.countDownTime = Math.abs(cc.zm.userInfo.sec);

        _this4.schedule(_this4.TurnTableCountDown, 1);
      } else {
        btnCom.interactable = true;
      }
    });
  },
  // 大转盘的倒计时
  TurnTableCountDown: function TurnTableCountDown() {
    if (this.countDownTime) {
      if (this.countDownTime < 0) {
        this.unschedule(this.TurnTableCountDown);
      } else {
        // 每一秒更新倒计时
        var time = this.TurntableLayer.getChildByName("countLbl").getComponent(cc.Label);
        this.countDownTime--;
        time.string = this.changeSecond(this.countDownTime);
      }
    }
  },
  // 显示红包池界面
  showRedPoolLayer: function showRedPoolLayer() {
    var _this5 = this;

    // 获取奖池信息
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/JackPot", "GET", sendData).then(function (res) {
      cc.Tools.showBanner();
      _this5.jackpot_acti++;
      var dotData = {
        sign_in_acti: _this5.sign_in_acti,
        turntable_acti: _this5.turntable_acti,
        cash_out_acti: _this5.cash_out_acti,
        bank_acti: _this5.bank_acti,
        jackpot_acti: _this5.jackpot_acti,
        level_start: _this5.level_start
      };
      cc.Tools.dot("click", dotData);
      _this5.RedPoolLayer.active = true;
      var poolInfo = res.data;
      var arr = ["kai", "xin", "kuang", "gong"];

      for (var i = 0; i < 4; i++) {
        var value = poolInfo[arr[i]];

        var com = _this5.RedPoolLayer.getChildByName(arr[i]).getComponent(cc.Label);

        com.string = "x" + value;
      } // 奖池金额 


      var award_lbl = _this5.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label);

      award_lbl.string = poolInfo.amount; // 增加倒计时

      var hour = _this5.RedPoolLayer.getChildByName("count_1").getComponent(cc.Label);

      hour.string = poolInfo.hour;

      var minute = _this5.RedPoolLayer.getChildByName("count_2").getComponent(cc.Label);

      minute.string = poolInfo.minute < 10 ? "0" + poolInfo.minute : poolInfo.minute;
    });
  },
  // 显示7日任务界面
  showSevenWorkLayer: function showSevenWorkLayer() {
    var _this6 = this;

    // 现获取七日任务列表
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function (res) {
      cc.Tools.showBanner(); // console.log("七日任务列表=", res.data);
      // 通过数据初始化界面 状态 0.未领取 1.已领取

      var items = res.data.items;
      var serverDay = res.data.day;

      if (_this6.signNumber === serverDay) {
        return;
      }

      var arr = [];

      for (var i = 0; i < items.length; i++) {
        // 先获取自己的数据 
        var _status = items[i].status;

        if (!_status) {
          _this6.signNumber = items[i].num;
          break;
        }
      }

      if (_this6.signNumber > serverDay) {
        _this6.signNumber = serverDay;
      } // todo
      // this.signNumber = 7;


      for (var _i = 0; _i < items.length; _i++) {
        if (_this6.signNumber === items[_i].num) {
          arr.push(items[_i]);
        }
      } // 设置title


      var title = _this6.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite);

      title.spriteFrame = _this6.SevenFrames[arr[0].num - 1]; // 一只当前数据item 通过数据

      var layout = _this6.SevenWorkLayer.getChildByName("layout");

      if (arr.length === 1) {
        var _layout = layout.getChildByName("layout_2");

        _layout.active = false;
      }

      for (var j = 0; j < arr.length; j++) {
        var _data = arr[j];

        var _layoutH = layout.getChildByName("layout_" + (j + 1));

        _layoutH.active = true;

        var btn = _layoutH.getChildByName("getMoneyBtn");

        btn._id = _data.id;
        btn.value = _data.value;
        var btnCom = btn.getComponent(cc.Button);

        if (_data.status === 1) {
          btnCom.enableAutoGrayEffect = true;
          btnCom.interactable = false;
        } else {
          btnCom.interactable = true; // 判断所有条件是否均达成

          var isComplete = false;

          if (_data.curr_pass_stage >= _data.need_pass_stage && _data.curr_sign_in >= _data.need_sign_in && _data.curr_invite >= _data.need_invite) {
            isComplete = true;
          }

          if (isComplete) {
            // 条件达成
            btn.complete = true;
          } else {
            // 没有达成
            btn.complete = false;
          }
        } // 先设置文本
        // 红包


        var red = _layoutH.getChildByName("lbl1").getComponent(cc.Label);

        red.string = _data.value; // 设置观看视频次数

        var videoText = _layoutH.getChildByName("lbl2").getComponent(cc.Label);

        videoText.string = "\u89C2\u770B" + _data.need_ad + "\u4E2A\u89C6\u9891"; // 进度条

        var bar = _layoutH.getChildByName("progressBar").getComponent(cc.ProgressBar);

        bar.progress = _data.curr_ad / _data.need_ad;

        var barLbl = _layoutH.getChildByName("barLbl").getComponent(cc.Label);

        barLbl.string = _data.curr_ad + "/" + _data.need_ad; // 额外条件
        // 需要通关数

        var itemLayout = _layoutH.getChildByName("layout");

        var item0 = itemLayout.getChildByName("item_0");
        var item1 = itemLayout.getChildByName("item_1");
        var item2 = itemLayout.getChildByName("item_2");

        if (_data.need_pass_stage) {
          item0.active = true;
          item0.getChildByName("lbl").getComponent(cc.Label).string = "\u901A\u8FC7\u7B2C" + _data.need_pass_stage + "\u5173";
          var arrow = item0.getChildByName("icon").getChildByName("arrow");
          arrow.active = _data.curr_pass_stage >= _data.need_pass_stage;
        } else {
          item0.active = false;
        }

        if (_data.need_sign_in) {
          item1.active = true;
          item1.getChildByName("lbl").getComponent(cc.Label).string = "\u9886\u53D6\u7B7E\u5230\u5956\u52B1";

          var _arrow = item1.getChildByName("icon").getChildByName("arrow");

          _arrow.active = _data.curr_sign_in >= _data.need_sign_in;
        } else {
          item1.active = false;
        }

        if (_data.need_invite) {
          item2.active = true;
          item2.getChildByName("lbl").getComponent(cc.Label).string = "\u9080\u8BF7" + _data.need_invite + "\u4E2A\u597D\u53CB";

          var _arrow2 = item2.getChildByName("icon").getChildByName("arrow");

          _arrow2.active = _data.curr_invite >= _data.need_invite;
        } else {
          item2.active = false;
        }
      }

      _this6.SevenWorkLayer.active = true;
    });
  },
  // 显示重置关卡界面
  showResumeLayer: function showResumeLayer() {
    this.ResumeLayer.active = true;
  },
  resumeLevel: function resumeLevel() {
    var _this7 = this;

    cc.Tools.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then(function (res) {
      _this7.ResumeLayer.active = false;

      _this7.getUserInfo();
    });
  },
  sevenWorkGetMoney: function sevenWorkGetMoney(e) {
    var _this8 = this;

    this.cash_out_acti++;
    var dotData = {
      sign_in_acti: this.sign_in_acti,
      turntable_acti: this.turntable_acti,
      cash_out_acti: this.cash_out_acti,
      bank_acti: this.bank_acti,
      jackpot_acti: this.jackpot_acti,
      level_start: this.level_start
    };
    cc.Tools.dot("click", dotData);
    var target = e.target;

    if (!target.complete) {
      cc.Tools.showTips(this.node, "条件未达成");
    } else {
      // 像服务器发送提现请求
      cc.Tools.sendRequest("pit.v1.PitSvc/PullMission", "POST", {
        id: target._id
      }).then(function (res) {
        // 像服务器发送提现请求
        // console.log("像服务器发送提现请求", res.data);
        var btnCom = target.getComponent(cc.Button);
        btnCom.enableAutoGrayEffect = true;
        btnCom.interactable = false;
        _this8.SevenWorkLayer.getChildByName("getLayer").active = true; // 重新刷新

        _this8.showSevenWorkLayer();

        var dotData = {
          cash_type: "红包提现",
          cash_num: target.value,
          cash_times: "",
          cash_result: "成功"
        };
        cc.log("打点数据", dotData);
        cc.Tools.dot("cash_out", dotData);
      });
    }
  },
  // 显示存钱罐界面
  showGetMoneyLayer: function showGetMoneyLayer() {
    var _this9 = this;

    // 打开存钱罐 获取存钱罐的信息
    cc.Tools.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function (res) {
      cc.Tools.showBanner();
      _this9.bank_acti++;
      var dotData = {
        sign_in_acti: _this9.sign_in_acti,
        turntable_acti: _this9.turntable_acti,
        cash_out_acti: _this9.cash_out_acti,
        bank_acti: _this9.bank_acti,
        jackpot_acti: _this9.jackpot_acti,
        level_start: _this9.level_start
      };
      cc.Tools.dot("click", dotData);
      var data = res.data;
      var gc = data.gc || 0; // console.log("存钱罐信息=", data);
      // 先定义当前那个阶段是否可以提取

      _this9.getMoneyStage = 0;
      var arr = [0.3, 0.5, 1, 2, 5, 10, 20];

      for (var i = 0; i < data.items.Length; i++) {
        if (data.items[i].times) {
          _this9.getMoneyStage = arr[i];
          break;
        }
      } // 初始化存钱罐界面属性


      _this9.GetMonetyLayer.active = true; // 显示元宝余额

      _this9.GetMonetyLayer.getChildByName("YuanBao_Number").getComponent(cc.Label).string = gc; // // 元宝跟现金进行转换 转换比例为10000:1

      _this9.extractMoney = gc / 10000;
      _this9.GetMonetyLayer.getChildByName("Change_Number").getComponent(cc.Label).string = _this9.extractMoney + "元";
      _this9.choiceBtn = null; // 开始的时候getMoneyBtn置灰不可点击

      var btn = _this9.GetMonetyLayer.getChildByName("getMoneyBtn");

      var btnCom = btn.getComponent(cc.Button);
      btnCom.enableAutoGrayEffect = true;
      btnCom.interactable = false;
    });
  },
  // 点击选择提现金钱按钮
  choiceGetMoneyBtn: function choiceGetMoneyBtn(e, msg) {
    var target = e.target;

    if (this.choiceBtn === null) {
      this.choiceBtn = target;
      this.choiceBtn.money = Number(msg);
      this.selectBtn(target);
    } else {
      this.unSelectBtn(this.choiceBtn);
      this.choiceBtn = target;
      this.choiceBtn.money = Number(msg);
      this.selectBtn(target);
    }

    var btn = this.GetMonetyLayer.getChildByName("getMoneyBtn");
    var btnCom = btn.getComponent(cc.Button);
    btnCom.interactable = true;
  },
  // 点击提现按钮
  clickGetMoneyBtn1: function clickGetMoneyBtn1(e) {
    var _this10 = this;

    this.cash_out_acti++;
    var dotData = {
      sign_in_acti: this.sign_in_acti,
      turntable_acti: this.turntable_acti,
      cash_out_acti: this.cash_out_acti,
      bank_acti: this.bank_acti,
      jackpot_acti: this.jackpot_acti,
      level_start: this.level_start
    };
    cc.Tools.dot("click", dotData);
    var target = e.target;

    if (this.choiceBtn === null) {
      return;
    } else {
      // 开始提现金钱
      // 判断条件 1  是否元宝数量是否满足提现档位，不满足时提示：元宝数量不足
      // 判断条件 2  档位是否为最小档位，如果不是提示：请先完成上一个档位提现
      // console.log("开始提现", this.choiceBtn.money);
      if (this.extractMoney < this.choiceBtn.money) {
        // 不符合条件1 弹出元宝数量不足的tips
        cc.Tools.showTips(this.node, "元宝数量不足");
        return;
      }

      if (this.choiceBtn.money > this.getMoneyStage) {
        // 不符合条件2 
        cc.Tools.showTips(this.node, "请先完成上一个档位提现");
        return;
      } // 都符合条件像服务器发送请求


      cc.Tools.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function (res) {
        // 成功提现
        var dotData = {
          cash_type: "元宝提现",
          cash_num: _this10.choiceBtn.money,
          cash_times: "",
          cash_result: "成功"
        };
        cc.log("打点数据", dotData);
        cc.Tools.dot("cash_out", dotData);
        var layer = target.parent.getChildByName("getLayer");
        layer.active = true;
      });
    }
  },
  // 关闭音乐
  stopBGM: function stopBGM(event) {
    if (cc.zm.showMusic) {
      cc.zm.showMusic = false;
      this.unSelectBtn(event.target);
      cc.audioEngine.pause(this.BGM_ID);
    } else {
      cc.zm.showMusic = true;
      this.selectBtn(event.target);
      cc.audioEngine.resume(this.BGM_ID);
    }
  },
  // 关闭震动
  shakePhone: function shakePhone(event) {
    if (cc.zm.showShake) {
      cc.zm.showShake = false;
      this.unSelectBtn(event.target);
    } else {
      cc.zm.showShake = true;
      this.selectBtn(event.target);
    }
  },
  selectBtn: function selectBtn(btn) {
    btn.getChildByName("select").active = true;
  },
  unSelectBtn: function unSelectBtn(btn) {
    btn.getChildByName("select").active = false;
  },
  completeBtn: function completeBtn(btn) {
    btn.getChildByName("select").active = false;
    btn.getChildByName("complete").active = true;
  },
  // 退出登陆
  ExitBackBtn: function ExitBackBtn(e) {
    e.target.parent.active = false;

    if (this.choiceBtn) {
      this.unSelectBtn(this.choiceBtn);
      this.choiceBtn = null;
    }

    if (this.TurntableLayer.active === true) {
      this.showTurntableLayer();
    } // 关闭当前也进入首页 刷新界面


    this.signNumber = 0;
    this.getUserInfo(); // console.log("退出登陆");
  },
  // 点击签到按钮
  clickSignBtn: function clickSignBtn(e) {
    // 签到
    cc.Tools.showJiliAd();

    if (!cc.sys.isNative) {
      cc.zm.videoAd.clickSign = false;
    }
  },
  // 点击转盘开始按钮
  clickTurnTableBtn: function clickTurnTableBtn(e) {
    // 每看一次视频可获得一次抽奖机会，每次抽奖冷却时间为5分钟 冷却时间让服务器做
    if (this.countDownTime > 0) {
      // 抽奖倒计时 >=0 代表可以抽奖，<0 取绝对值 倒数秒数
      return;
    }

    cc.Tools.showJiliAd();

    if (!cc.sys.isNative) {
      cc.zm.videoAd.clickTable = false;
    }
  },
  createRandm: function createRandm(n, m) {
    m += 1;
    var a = m - n;
    var num = Math.random() * a + n;
    return parseInt(num);
  },
  update: function update(dt) {
    var _this11 = this;

    // 转盘
    if (this.beginTurn) {
      // 开始旋转
      this.point.angle -= this.speed;

      if (this.point.angle <= 0) {
        this.point.angle = 360;
        this.circle++;

        if (this.circle % 2 === 0) {
          // 条件达成 表示转了两圈
          this.speed -= this.value;

          if (this.value === 4.5) {
            this.value = 4.5;
          } else {
            this.value += 1.5;
          }
        }
      } // console.log(this.speed);


      if (this.speed <= 5 && this.point.angle <= this.endAngle) {
        this.beginTurn = false;
        this.point.angle = this.endAngle;
      }
    } // 签到


    if (!cc.zm.videoAd.clickSign) {
      cc.log("获取签到奖励");
      cc.zm.videoAd.clickSign = true; // 实时更新签到界面

      cc.Tools.sendRequest("pit.v1.PitSvc/SignIn", "POST", sendData).then(function (res) {
        var signDay = _this11.SignLayer.getChildByName("day_" + _this11.signDay);

        _this11.completeBtn(signDay); // data数据 gc奖励元宝 card 0未获得 1开,2心,3矿


        var arr = ["三元红包", "炸药x1", "药水x1", "500元宝", "8.88元红包", "时钟x1", "18.88元红包"];
        var data = res.data;

        _this11.showPop(arr[_this11.signDay - 1], AWARD["DAY_" + _this11.signDay], data.gc, data.card);
      })["catch"](function (res) {
        cc.Tools.showTips(_this11.node, "今日奖励已领取");
      });
    } // 转盘


    if (!cc.zm.videoAd.clickTable) {
      cc.zm.videoAd.clickTable = true; // 先像服务器发送请求获取物品id

      var _sendData = {
        "ad": cc.zm.ad
      }; // 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包

      var obj = {
        "1": 60,
        "10": 240,
        "11": 180,
        "12": 120,
        "31": 360,
        "32": 300
      };
      cc.Tools.sendRequest("pit.v1.PitSvc/Lottery", "POST", _sendData).then(function (res) {
        _this11.endAngle = obj["" + res.data.award]; // 开始旋转 初始速度为

        _this11.point = _this11.TurntableLayer.getChildByName("Pointer");
        _this11.beginTurn = true;
        _this11.point.angle = 360;
        _this11.speed = 18;
        _this11.value = 1;
        _this11.circle = 0;

        _this11.scheduleOnce(function () {
          var data = res.data;
          var award = {
            "1": {
              name: "体力x1",
              index: AWARD.POWER
            },
            "10": {
              name: "炸弹x1",
              index: AWARD.BOOM
            },
            "11": {
              name: "时钟x1",
              index: AWARD.LOCK
            },
            "12": {
              name: "石化手册x1",
              index: AWARD.SHOUCE
            },
            "31": {
              name: "五元红包",
              index: AWARD.RED_5
            },
            "32": {
              name: "十元红包",
              index: AWARD.RED_10
            }
          };
          var _award = award[data.award];

          _this11.showPop(_award.name, _award.index, data.gc, data.card);
        }, 4.5);
      });
    }
  },
  // 增加显示弹出获得物品的弹窗
  // 奖品类型 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包
  showPop: function showPop(goodName, goodNumber, gcNumber, textNumber) {
    this.GetGoodLayer.active = true;
    cc.Tools.showBanner();
    var layout = this.GetGoodLayer.getChildByName("layout");
    var icon = this.GetGoodLayer.getChildByName("icon").getComponent(cc.Sprite);
    var text = this.GetGoodLayer.getChildByName("lbl").getComponent(cc.Label);
    text.string = "\u83B7\u5F97" + goodName;
    icon.spriteFrame = this.AwardFrames[goodNumber];
    var layout1 = layout.getChildByName("layout_1");
    var layout2 = layout.getChildByName("layout_2");

    if (gcNumber) {
      layout1.active = true;
      var lbl = layout1.getChildByName("lbl").getComponent(cc.Label);
      lbl.string = "\u83B7\u5F97\u5143\u5B9D+" + gcNumber;
    } else {
      layout1.active = false;
    }

    if (textNumber) {
      layout2.active = true;

      var _icon = layout2.getChildByName("icon").getComponent(cc.Sprite);

      _icon.spriteFrame = this.TextFrames[textNumber - 1];
    } else {
      layout2.active = false;
    }
  },
  // 退出登陆
  ExitWxLogin: function ExitWxLogin() {
    // 清掉token
    cc.wxToken = null;
    cc.wxLoginResultcode = null;
    cc.sys.localStorage.removeItem("token");
    cc.director.loadScene("Login");
  },
  // 显示用户协议
  showUserProtocol: function showUserProtocol() {
    var protocol = this.SetLayer.getChildByName("user_protocol");
    protocol.active = true;
  },
  hideUserProtocol: function hideUserProtocol() {
    var protocol = this.SetLayer.getChildByName("user_protocol");
    protocol.active = false;
  },
  // 显示隐私政策
  showUserPrivacy: function showUserPrivacy() {
    var protocol = this.SetLayer.getChildByName("user_privacy"); // 设置用户协议

    protocol.active = true;
  },
  hideUserPrivacy: function hideUserPrivacy() {
    var protocol = this.SetLayer.getChildByName("user_privacy");
    protocol.active = false;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbIkFXQVJEIiwiY2MiLCJFbnVtIiwiREFZXzEiLCJEQVlfMiIsIkRBWV8zIiwiREFZXzQiLCJEQVlfNSIsIkRBWV82IiwiREFZXzciLCJSRURfNSIsIlJFRF8xMCIsIkJPT00iLCJMT0NLIiwiU0hPVUNFIiwiUE9XRVIiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCR00iLCJ0eXBlIiwiQXVkaW9DbGlwIiwiU2V2ZW5GcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkF3YXJkRnJhbWVzIiwiVGV4dEZyYW1lcyIsIm9uTG9hZCIsInptIiwidmlkZW9BZCIsImNsaWNrU2lnbiIsImNsaWNrVGFibGUiLCJUb29scyIsInNjcmVlbkFkYXB0ZXIiLCJkb3QiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic2NoZWR1bGVPbmNlIiwic2NhbGUiLCJ0d2VlbiIsInRvIiwic3RhcnQiLCJTZXRMYXllciIsIlNpZ25MYXllciIsIlR1cm50YWJsZUxheWVyIiwiR2V0TW9uZXR5TGF5ZXIiLCJTZXZlbldvcmtMYXllciIsIlJlZFBvb2xMYXllciIsIkdldEdvb2RMYXllciIsIlNlZVZpZGVvbGF5ZXIiLCJSZXN1bWVMYXllciIsInNob3dNdXNpYyIsInNob3dTaGFrZSIsImNvdW50RG93blRpbWUiLCJzaWduTnVtYmVyIiwiQkdNX0lEIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJndWlkZSIsImdldENoaWxkQnlOYW1lIiwic2hvd0Jhbm5lciIsImdldFVzZXJJbmZvIiwic2lnbl9pbl9hY3RpIiwidHVybnRhYmxlX2FjdGkiLCJjYXNoX291dF9hY3RpIiwiYmFua19hY3RpIiwiamFja3BvdF9hY3RpIiwibGV2ZWxfc3RhcnQiLCJzZW5kRGF0YSIsInNlbmRSZXF1ZXN0IiwidGhlbiIsInJlcyIsInVzZXJJbmZvIiwiZGF0YSIsImxvZyIsInNpZ3NpZ25faW5fdGltZSIsIkRhdGUiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiU3RhcnRHYW1lIiwic3RvcCIsImRvdERhdGEiLCJMZXZlbEluZm8iLCJjb25zb2xlIiwic2hvd1NlZVZpZGVvbGF5ZXIiLCJsb2FkU2NlbmUiLCJzZWVWaWRlb0F3YXJkIiwiZW50ZXJHYW1lIiwic2hvd0ppbGlBZCIsInNob3dTaWduTGF5ZXIiLCJpdGVtcyIsInNpZ25EYXkiLCJkYXkiLCJpIiwiZGF5Tm9kZSIsIl9kYXRhIiwic3RhdHVzIiwiY29tcGxldGVCdG4iLCJzZWxlY3RCdG4iLCJ1blNlbGVjdEJ0biIsInNob3dTZXRMYXllciIsIm5pY2tOYW1lIiwibmlja19uYW1lIiwidXNlcklkIiwidXNlcl9pZCIsImljb24iLCJTcHJpdGUiLCJyZW1vdGVVcmwiLCJhdmF0YXJfdXJsIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImV4dCIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsImhpZGVCYW5uZXIiLCJyZWRfcGFjayIsImdjIiwic2NvcmUiLCJidG5Db20iLCJCdXR0b24iLCJ3aW4iLCJlbmFibGVBdXRvR3JheUVmZmVjdCIsImludGVyYWN0YWJsZSIsInNob3dUdXJudGFibGVMYXllciIsInBvaW50IiwiYW5nbGUiLCJzZWMiLCJhYnMiLCJUdXJuVGFibGVDb3VudERvd24iLCJzaG93UmVkUG9vbExheWVyIiwicG9vbEluZm8iLCJhcnIiLCJ2YWx1ZSIsImNvbSIsImF3YXJkX2xibCIsImFtb3VudCIsImhvdXIiLCJzaG93U2V2ZW5Xb3JrTGF5ZXIiLCJzZXJ2ZXJEYXkiLCJsZW5ndGgiLCJfc3RhdHVzIiwibnVtIiwicHVzaCIsInRpdGxlIiwibGF5b3V0IiwiX2xheW91dCIsImoiLCJfbGF5b3V0SCIsImJ0biIsIl9pZCIsImlkIiwiaXNDb21wbGV0ZSIsImN1cnJfcGFzc19zdGFnZSIsIm5lZWRfcGFzc19zdGFnZSIsImN1cnJfc2lnbl9pbiIsIm5lZWRfc2lnbl9pbiIsImN1cnJfaW52aXRlIiwibmVlZF9pbnZpdGUiLCJjb21wbGV0ZSIsInJlZCIsInZpZGVvVGV4dCIsIm5lZWRfYWQiLCJiYXIiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY3Vycl9hZCIsImJhckxibCIsIml0ZW1MYXlvdXQiLCJpdGVtMCIsIml0ZW0xIiwiaXRlbTIiLCJhcnJvdyIsInNob3dSZXN1bWVMYXllciIsInJlc3VtZUxldmVsIiwic2V2ZW5Xb3JrR2V0TW9uZXkiLCJlIiwidGFyZ2V0Iiwic2hvd1RpcHMiLCJub2RlIiwiY2FzaF90eXBlIiwiY2FzaF9udW0iLCJjYXNoX3RpbWVzIiwiY2FzaF9yZXN1bHQiLCJzaG93R2V0TW9uZXlMYXllciIsImdldE1vbmV5U3RhZ2UiLCJMZW5ndGgiLCJ0aW1lcyIsImV4dHJhY3RNb25leSIsImNob2ljZUJ0biIsImNob2ljZUdldE1vbmV5QnRuIiwibXNnIiwibW9uZXkiLCJOdW1iZXIiLCJjbGlja0dldE1vbmV5QnRuMSIsImxheWVyIiwicGFyZW50Iiwic3RvcEJHTSIsImV2ZW50IiwicGF1c2UiLCJyZXN1bWUiLCJzaGFrZVBob25lIiwiRXhpdEJhY2tCdG4iLCJjbGlja1NpZ25CdG4iLCJpc05hdGl2ZSIsImNsaWNrVHVyblRhYmxlQnRuIiwiY3JlYXRlUmFuZG0iLCJuIiwibSIsImEiLCJyYW5kb20iLCJwYXJzZUludCIsInVwZGF0ZSIsImR0IiwiYmVnaW5UdXJuIiwic3BlZWQiLCJjaXJjbGUiLCJlbmRBbmdsZSIsInNob3dQb3AiLCJjYXJkIiwiYWQiLCJvYmoiLCJhd2FyZCIsIm5hbWUiLCJpbmRleCIsIl9hd2FyZCIsImdvb2ROYW1lIiwiZ29vZE51bWJlciIsImdjTnVtYmVyIiwidGV4dE51bWJlciIsInRleHQiLCJsYXlvdXQxIiwibGF5b3V0MiIsImxibCIsIkV4aXRXeExvZ2luIiwid3hUb2tlbiIsInd4TG9naW5SZXN1bHRjb2RlIiwicmVtb3ZlSXRlbSIsInNob3dVc2VyUHJvdG9jb2wiLCJwcm90b2NvbCIsImhpZGVVc2VyUHJvdG9jb2wiLCJzaG93VXNlclByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBRSxDQVRVO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUUsQ0FWWTtBQVdsQkMsRUFBQUEsSUFBSSxFQUFFLEVBWFk7QUFZbEJDLEVBQUFBLE1BQU0sRUFBRSxFQVpVO0FBYWxCQyxFQUFBQSxLQUFLLEVBQUU7QUFiVyxDQUFSLENBQWQ7QUFlQWQsRUFBRSxDQUFDZSxLQUFILENBQVM7QUFDTCxhQUFTZixFQUFFLENBQUNnQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURDLE1BQUFBLElBQUksRUFBRW5CLEVBQUUsQ0FBQ29CO0FBRlIsS0FERztBQUtSQyxJQUFBQSxXQUFXLEVBQUU7QUFD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YTtBQUNkLFFBQUlILFFBQVEsR0FBRyxLQUFLdk4sUUFBTCxDQUFjbUIsY0FBZCxDQUE2QixjQUE3QixDQUFmO0FBQ0FvTSxJQUFBQSxRQUFRLENBQUNsTyxNQUFULEdBQWtCLEtBQWxCO0FBQ0g7QUFoMEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNvbnN0IEFXQVJEID0gY2MuRW51bSh7XG4gICAgREFZXzE6IDAsXG4gICAgREFZXzI6IDEsXG4gICAgREFZXzM6IDIsXG4gICAgREFZXzQ6IDMsXG4gICAgREFZXzU6IDQsXG4gICAgREFZXzY6IDUsXG4gICAgREFZXzc6IDYsXG4gICAgUkVEXzU6IDcsXG4gICAgUkVEXzEwOiA4LFxuICAgIEJPT006IDksXG4gICAgTE9DSzogMTAsXG4gICAgU0hPVUNFOiAxMSxcbiAgICBQT1dFUjogMTJcbn0pXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBCR006IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgU2V2ZW5GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEF3YXJkRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBUZXh0RnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v5YWz6ZetRlBT6Z2i5p2/XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICAgIGNjLnptID0ge307XG4gICAgICAgIGNjLnptLnZpZGVvQWQgPSB7fTtcbiAgICAgICAgLy8g562+5Yiw5qCH6K6wXG4gICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgLy8g6L2s55uY5qCH6K6wXG4gICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IHRydWU7XG4gICAgICAgIC8vIOWinuWKoOWxj+W5leinhumikVxuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIC8vIOi/m+WFpeS4u+eVjOmdouaJk+eCuVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJlbnRlcl9tYWluXCIpXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+esrOS4gOasoei/m+WFpea4uOaIjyDlpoLmnpznrKzkuIDmrKHov5vlhaXpgqPkuYjlvLnlh7pGaXJzdOW8ueeql1xuICAgICAgICBsZXQgZmlyc3RMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9GaXJzdCcpO1xuICAgICAgICBmaXJzdExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX2ZpcnN0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RcIik7XG4gICAgICAgIGlmICghX2ZpcnN0KSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmaXJzdExheWVyLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICBmaXJzdExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZmlyc3RMYXllcikudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIDEpXG4gICAgICAgIH1cbiAgICAgICAgLy/nm5HlkKzlvIDlp4vmuLjmiI9cbiAgICAgICAgLy8g6K6+572u55WM6Z2iXG4gICAgICAgIHRoaXMuU2V0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2V0TGF5ZXInKTtcbiAgICAgICAgLy8g562+5Yiw55WM6Z2iXG4gICAgICAgIHRoaXMuU2lnbkxheWVyID0gY2MuZmluZCgnQ2FudmFzL1NpZ25MYXllcicpO1xuICAgICAgICAvLyDlpKfovaznm5jnlYzpnaJcbiAgICAgICAgdGhpcy5UdXJudGFibGVMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9UdXJudGFibGVMYXllcicpO1xuICAgICAgICAvLyDlrZjpkrHnvZDnlYzpnaIg5o+Q546w5Lmf5piv6L+Z5Liq55WM6Z2iXG4gICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvR2V0TW9uZXlMYXllcicpO1xuICAgICAgICAvLyDkuIPml6Xku7vliqFcbiAgICAgICAgdGhpcy5TZXZlbldvcmtMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2V2ZW5Xb3JrTGF5ZXJcIik7XG4gICAgICAgIC8vIOWlluaxoOe6ouWMheeVjOmdolxuICAgICAgICB0aGlzLlJlZFBvb2xMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvUmVkUG9vbExheWVyXCIpXG4gICAgICAgIC8vIOiOt+WPlueJqeWTgeeahOW8ueeql1xuICAgICAgICB0aGlzLkdldEdvb2RMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvR2V0R29vZFwiKVxuICAgICAgICAvLyDnnIvop4bpopHlvpflpZblirHnlYzpnaJcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyID0gY2MuZmluZChcIkNhbnZhcy9TZWVWaWRlb2xheWVyXCIpXG4gICAgICAgIC8vIOmHjee9ruWFs+WNoeeVjOmdolxuICAgICAgICB0aGlzLlJlc3VtZUxheWVyID0gY2MuZmluZChcIkNhbnZhcy9SZXN1bWVMYXllclwiKVxuICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICBjYy56bS5zaG93U2hha2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvdW50RG93blRpbWUgPSAwO1xuICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLkJHTV9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5CR00pO1xuICAgICAgICAvL+mihOWKoOi9veWcuuaZrzJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdHYW1lJyk7XG4gICAgICAgIC8vIOaWsOaJi+W8leWvvFxuICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKVxuICAgICAgICBndWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8wXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSAhPT0gXCJvdmVyXCIpIHtcbiAgICAgICAgICAgIGlmICghY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpID09PSAnNCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmmL7npLpiYW5uZXLlub/lkYpcbiAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICAvLyDorrDlvZXmiZPngrnnmoTlgLxcbiAgICAgICAgLy8g562+5Yiw5omT54K5XG4gICAgICAgIHRoaXMuc2lnbl9pbl9hY3RpID0gMDtcbiAgICAgICAgLy8g6L2s55uY5omT54K5XG4gICAgICAgIHRoaXMudHVybnRhYmxlX2FjdGkgPSAwO1xuICAgICAgICAvLyDmj5DnjrDmiZPngrlcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpID0gMDtcbiAgICAgICAgLy8g5a2Y6ZKx572Q5omT54K5XG4gICAgICAgIHRoaXMuYmFua19hY3RpID0gMDtcbiAgICAgICAgLy8g5aWW5rGg57qi5YyF5omT54K5XG4gICAgICAgIHRoaXMuamFja3BvdF9hY3RpID0gMDtcbiAgICAgICAgLy8g5byA5aeL5ri45oiP5omT54K5XG4gICAgICAgIHRoaXMubGV2ZWxfc3RhcnQgPSAwO1xuICAgIH0sXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSB0aGlzLnVzZXJJbmZvXG4gICAgICAgICAgICBjYy5sb2coXCJjb2NvcyB1c2VyIGluZm8gXCIgKyB0aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgIC8vIOazqOWGjOaJk+eCuVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwic2lnbl9pblwiLCB7IHNpZ3NpZ25faW5fdGltZTogbmV3IERhdGUoKSB9KVxuICAgICAgICAgICAgdGhpcy5zaG93SW5kZXhMYXllcigpO1xuICAgICAgICAgICAgLy8g5L2T5Yqb5piv5ZCm5YCS6K6h5pe2XG4gICAgICAgICAgICB0aGlzLlBvd2VyVGltZSgpXG5cbiAgICAgICAgICAgIC8vIHRvZG8gdGVzdFxuICAgICAgICAgICAgLy8gIGNjLlRvb2xzLmFkQ2FsbEJhY2soKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIFBvd2VyVGltZSgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPCA1KSB7XG4gICAgICAgICAgICAvLyDnjrDlnKjmiY3kvJrlgJLorqHml7ZcbiAgICAgICAgICAgIC8vIOWFiOiOt+WPllxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFBvd2VyVGltZVNjaGVkdWxlKCkge1xuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXJfc2VjIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgICAgIC8vIOWcqOiOt+WPlueUqOaIt+S/oeaBryDmmK/lkKbkvZPlipvmu6Eg5rKh5pyJ5ruh5o6l552A5YCS6K6h5pe2XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgIGxldCB0aW1lID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci90aW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyk7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mby5wb3dlcl9zZWMtLVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5bCG56eS5pWw5Lyg6L+b5p2l55Sf5oiQ5LiA5LiqMDA6MDDlvaLlvI/nmoTlrZfnrKbkuLJcbiAgICBjaGFuZ2VTZWNvbmQocykge1xuICAgICAgICBsZXQgbWludXRlID0gXCIwXCIgKyBNYXRoLmZsb29yKHMgLyA2MCk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBzICUgNjAgPj0gMTAgPyBzICUgNjAgOiBcIjBcIiArIHMgJSA2MFxuICAgICAgICByZXR1cm4gbWludXRlICsgXCI6XCIgKyBzZWNvbmRcbiAgICB9LFxuICAgIGd1aWRlT3ZlcigpIHtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIFwib3ZlclwiKTtcbiAgICB9LFxuICAgIFN0YXJ0R2FtZSgpIHtcbiAgICAgICAgLy/lhbPpl61CR01cbiAgICAgICAgLy8gY2Muem0udXNlckluZm8ud2luID0gdHJ1ZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLkJHTV9JRCk7XG4gICAgICAgIC8v5riF56m65YWz5Y2h5pWwIOS4jea4heepuuWFs+WNoVxuICAgICAgICBpZiAodGhpcy5ndWlkZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ot7PovazlnLrmma9cbiAgICAgICAgLy8g5byA5aeL5ri45oiP5LmL5YmNIOWFiOiOt+WPluWFs+WNoeS/oeaBryDlpoLmnpzmsqHmnInlhbPljaHkv6Hmga/kuI3ov5vlhaXmuLjmiI9cbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5sZXZlbF9zdGFydCsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YWz5Y2h5L+h5oGvPVwiLCBjYy56bS5MZXZlbEluZm8pO1xuICAgICAgICAgICAgLy8g5Yik5patXG4gICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaYvuekuueci+inhumikeiOt+W+l+S9k+WKm+eVjOmdolxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlZVZpZGVvbGF5ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93U2VlVmlkZW9sYXllcigpIHtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeci+inhumikeW+l+WlluWKsVxuICAgIHNlZVZpZGVvQXdhcmQoKSB7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lID0gZmFsc2U7XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy8g5pi+56S6562+5Yiw55WM6Z2iXG4gICAgc2hvd1NpZ25MYXllcigpIHtcbiAgICAgICAgLy8g5YWI6I635Y+W562+5Yiw5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TaWduSW5MaXN0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgLy8g562+5Yiw5oyJ6ZKu5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNpZ25faW5fYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICB0aGlzLlNpZ25MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIGkpO1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGl0ZW1zW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc2lnbkRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuiuvue9rueVjOmdolxuICAgIHNob3dTZXRMYXllcigpIHtcbiAgICAgICAgdGhpcy5TZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICBsZXQgbmlja05hbWUgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibmlrZW5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbmlja05hbWUuc3RyaW5nID0gdGhpcy51c2VySW5mby5uaWNrX25hbWU7XG4gICAgICAgIGxldCB1c2VySWQgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcmlkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHVzZXJJZC5zdHJpbmcgPSBg55So5oi3SUTvvJoke3RoaXMudXNlckluZm8udXNlcl9pZH1gXG4gICAgICAgIC8vIGljb25cbiAgICAgICAgbGV0IGljb24gPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHZhciByZW1vdGVVcmwgPSB0aGlzLnVzZXJJbmZvLmF2YXRhcl91cmw7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHJlbW90ZVVybCwgeyBleHQ6ICcucG5nJyB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuS4u+eVjOmdolxuICAgIHNob3dJbmRleExheWVyKCkge1xuICAgICAgICAvLyDpmpDol49iYW5uZXJcbiAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAvLyDnuqLljIXnmoTmlbDph49cbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9HZXRNb25leS9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnJlZF9wYWNrO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucG93ZXI7XG4gICAgICAgIC8vIOWFg+WuneeahOS4quaVsFxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1l1YW5CYW8vbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5nYztcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9Hb2xkL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8uc2NvcmU7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlclxuICAgICAgICBsZXQgYnRuQ29tID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9CZWdpbkdhbWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby53aW4pIHtcbiAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65aSn6L2s55uY55WM6Z2iXG4gICAgc2hvd1R1cm50YWJsZUxheWVyKCkge1xuICAgICAgICAvLyDmmL7npLrlpKfovaznm5jkuYvliY3ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6NcbiAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMudHVybnRhYmxlX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YVxuICAgICAgICAgICAgdGhpcy5UdXJudGFibGVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZWdpbkJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5zZWMgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pyJ5YCS6K6h5pe2IOW8gOWni+WAkuiuoeaXtiB0b2RvXG4gICAgICAgICAgICAgICAgLy8g5q2k5pe26L2s55uY54K55Ye75oyJ6ZKuIOe9rueBsOS4lOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IE1hdGguYWJzKGNjLnptLnVzZXJJbmZvLnNlYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlR1cm5UYWJsZUNvdW50RG93biwgMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDlpKfovaznm5jnmoTlgJLorqHml7ZcbiAgICBUdXJuVGFibGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5q+P5LiA56eS5pu05paw5YCS6K6h5pe2XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUtLTtcbiAgICAgICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKHRoaXMuY291bnREb3duVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuue6ouWMheaxoOeVjOmdolxuICAgIHNob3dSZWRQb29sTGF5ZXIoKSB7XG4gICAgICAgIC8vIOiOt+WPluWlluaxoOS/oeaBr1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0phY2tQb3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5qYWNrcG90X2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwb29sSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcImthaVwiLCBcInhpblwiLCBcImt1YW5nXCIsIFwiZ29uZ1wiXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwb29sSW5mb1thcnJbaV1dO1xuICAgICAgICAgICAgICAgIGxldCBjb20gPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShhcnJbaV0pLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tLnN0cmluZyA9IFwieFwiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpZbmsaDph5Hpop0gXG4gICAgICAgICAgICBsZXQgYXdhcmRfbGJsID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3YXJkX2xibC5zdHJpbmcgPSBwb29sSW5mby5hbW91bnRcbiAgICAgICAgICAgIC8vIOWinuWKoOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IGhvdXIgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGhvdXIuc3RyaW5nID0gcG9vbEluZm8uaG91cjtcbiAgICAgICAgICAgIGxldCBtaW51dGUgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG1pbnV0ZS5zdHJpbmcgPSBwb29sSW5mby5taW51dGUgPCAxMCA/IFwiMFwiICsgcG9vbEluZm8ubWludXRlIDogcG9vbEluZm8ubWludXRlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g5pi+56S6N+aXpeS7u+WKoeeVjOmdolxuICAgIHNob3dTZXZlbldvcmtMYXllcigpIHtcbiAgICAgICAgLy8g546w6I635Y+W5LiD5pel5Lu75Yqh5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTWlzc2lvbnNcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vIOmAmui/h+aVsOaNruWIneWni+WMlueVjOmdoiDnirbmgIEgMC7mnKrpooblj5YgMS7lt7Lpooblj5ZcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgbGV0IHNlcnZlckRheSA9IHJlcy5kYXRhLmRheTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPT09IHNlcnZlckRheSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyDlhYjojrflj5boh6rlt7HnmoTmlbDmja4gXG4gICAgICAgICAgICAgICAgbGV0IF9zdGF0dXMgPSBpdGVtc1tpXS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKCFfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbk51bWJlciA9IGl0ZW1zW2ldLm51bTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA+IHNlcnZlckRheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbk51bWJlciA9IHNlcnZlckRheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIC8vIHRoaXMuc2lnbk51bWJlciA9IDc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA9PT0gaXRlbXNbaV0ubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDorr7nva50aXRsZVxuICAgICAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgdGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLlNldmVuRnJhbWVzW2FyclswXS5udW0gLSAxXVxuICAgICAgICAgICAgLy8g5LiA5Y+q5b2T5YmN5pWw5o2uaXRlbSDpgJrov4fmlbDmja5cbiAgICAgICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgX2xheW91dCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0SCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF9cIiArIChqICsgMSkpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXRILmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICAgICAgYnRuLl9pZCA9IF9kYXRhLmlkO1xuICAgICAgICAgICAgICAgIGJ0bi52YWx1ZSA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJgOacieadoeS7tuaYr+WQpuWdh+i+vuaIkFxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZSAmJiBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luICYmIF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlhYjorr7nva7mlofmnKxcbiAgICAgICAgICAgICAgICAvLyDnuqLljIVcbiAgICAgICAgICAgICAgICBsZXQgcmVkID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgcmVkLnN0cmluZyA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruingueci+inhumikeasoeaVsFxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RleHQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB2aWRlb1RleHQuc3RyaW5nID0gYOingueciyR7X2RhdGEubmVlZF9hZH3kuKrop4bpopFgXG4gICAgICAgICAgICAgICAgLy8g6L+b5bqm5p2hXG4gICAgICAgICAgICAgICAgbGV0IGJhciA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSBfZGF0YS5jdXJyX2FkIC8gX2RhdGEubmVlZF9hZDtcbiAgICAgICAgICAgICAgICBsZXQgYmFyTGJsID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJiYXJMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBiYXJMYmwuc3RyaW5nID0gYCR7X2RhdGEuY3Vycl9hZH0vJHtfZGF0YS5uZWVkX2FkfWBcbiAgICAgICAgICAgICAgICAvLyDpop3lpJbmnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHpgJrlhbPmlbBcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUxheW91dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMCA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzBcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8yXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YCa6L+H56ysJHtfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2V95YWzYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpooblj5bnrb7liLDlpZblirFgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9pbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YKA6K+3JHtfZGF0YS5uZWVkX2ludml0ZX3kuKrlpb3lj4tgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9pbnZpdGUgPj0gX2RhdGEubmVlZF9pbnZpdGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrph43nva7lhbPljaHnlYzpnaJcbiAgICBzaG93UmVzdW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHJlc3VtZUxldmVsKCkge1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUmVzZXRcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHNldmVuV29ya0dldE1vbmV5KGUpIHtcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpKys7XG4gICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG5cbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBcIuadoeS7tuacqui+vuaIkFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1B1bGxNaXNzaW9uXCIsIFwiUE9TVFwiLCB7IGlkOiB0YXJnZXQuX2lkIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWIt+aWsFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NldmVuV29ya0xheWVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdHlwZTogXCLnuqLljIXmj5DnjrBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9udW06IHRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90aW1lczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9yZXN1bHQ6IFwi5oiQ5YqfXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5omT54K55pWw5o2uXCIsIGRvdERhdGEpXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2FzaF9vdXRcIiwgZG90RGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuuWtmOmSsee9kOeVjOmdolxuICAgIHNob3dHZXRNb25leUxheWVyKCkge1xuICAgICAgICAvLyDmiZPlvIDlrZjpkrHnvZAg6I635Y+W5a2Y6ZKx572Q55qE5L+h5oGvXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TYXZpbmdQb3RcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5iYW5rX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGxldCBnYyA9IGRhdGEuZ2MgfHwgMFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlrZjpkrHnvZDkv6Hmga89XCIsIGRhdGEpO1xuICAgICAgICAgICAgLy8g5YWI5a6a5LmJ5b2T5YmN6YKj5Liq6Zi25q615piv5ZCm5Y+v5Lul5o+Q5Y+WXG4gICAgICAgICAgICB0aGlzLmdldE1vbmV5U3RhZ2UgPSAwO1xuICAgICAgICAgICAgbGV0IGFyciA9IFswLjMsIDAuNSwgMSwgMiwgNSwgMTAsIDIwXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXRlbXNbaV0udGltZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDliJ3lp4vljJblrZjpkrHnvZDnlYzpnaLlsZ7mgKdcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOaYvuekuuWFg+WuneS9meminVxuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIll1YW5CYW9fTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2M7XG4gICAgICAgICAgICAvLyAvLyDlhYPlrp3ot5/njrDph5Hov5vooYzovazmjaIg6L2s5o2i5q+U5L6L5Li6MTAwMDA6MVxuICAgICAgICAgICAgdGhpcy5leHRyYWN0TW9uZXkgPSBnYyAvIDEwMDAwO1xuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIkNoYW5nZV9OdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmV4dHJhY3RNb25leSArIFwi5YWDXCI7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgICAgICAvLyDlvIDlp4vnmoTml7blgJlnZXRNb25leUJ0bue9rueBsOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g54K55Ye76YCJ5oup5o+Q546w6YeR6ZKx5oyJ6ZKuXG4gICAgY2hvaWNlR2V0TW9uZXlCdG4oZSwgbXNnKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKHRoaXMuY2hvaWNlQnRuKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4ubW9uZXkgPSBOdW1iZXIobXNnKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4odGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnRuID0gdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+aPkOeOsOaMiemSrlxuICAgIGNsaWNrR2V0TW9uZXlCdG4xKGUpIHtcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpKys7XG4gICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vmj5DnjrDph5HpkrFcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAxICDmmK/lkKblhYPlrp3mlbDph4/mmK/lkKbmu6HotrPmj5DnjrDmoaPkvY3vvIzkuI3mu6HotrPml7bmj5DnpLrvvJrlhYPlrp3mlbDph4/kuI3otrNcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAyICDmoaPkvY3mmK/lkKbkuLrmnIDlsI/moaPkvY3vvIzlpoLmnpzkuI3mmK/mj5DnpLrvvJror7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5byA5aeL5o+Q546wXCIsIHRoaXMuY2hvaWNlQnRuLm1vbmV5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhY3RNb25leSA8IHRoaXMuY2hvaWNlQnRuLm1vbmV5KSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MSDlvLnlh7rlhYPlrp3mlbDph4/kuI3otrPnmoR0aXBzXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBcIuWFg+WuneaVsOmHj+S4jei2s1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4ubW9uZXkgPiB0aGlzLmdldE1vbmV5U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YyIFxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLor7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6YO956ym5ZCI5p2h5Lu25YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGCXG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvRXhjaGFuZ2VcIiwgXCJQT1NUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDmiJDlip/mj5DnjrBcbiAgICAgICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90eXBlOiBcIuWFg+WuneaPkOeOsFwiLFxuICAgICAgICAgICAgICAgICAgICBjYXNoX251bTogdGhpcy5jaG9pY2VCdG4ubW9uZXksXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdGltZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfcmVzdWx0OiBcIuaIkOWKn1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJk+eCueaVsOaNrlwiLCBkb3REYXRhKVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNhc2hfb3V0XCIsIGRvdERhdGEpXG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gdGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremfs+S5kFxuICAgIHN0b3BCR00oZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremch+WKqFxuICAgIHNoYWtlUGhvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dTaGFrZSkge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93U2hha2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHVuU2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjb21wbGV0ZUJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJjb21wbGV0ZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g6YCA5Ye655m76ZmGXG4gICAgRXhpdEJhY2tCdG4oZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0bikge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuVHVybnRhYmxlTGF5ZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUdXJudGFibGVMYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFs+mXreW9k+WJjeS5n+i/m+WFpemmlumhtSDliLfmlrDnlYzpnaJcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumAgOWHuueZu+mZhlwiKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+etvuWIsOaMiemSrlxuICAgIGNsaWNrU2lnbkJ0bihlKSB7XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDngrnlh7vovaznm5jlvIDlp4vmjInpkq5cbiAgICBjbGlja1R1cm5UYWJsZUJ0bihlKSB7XG5cbiAgICAgICAgLy8g5q+P55yL5LiA5qyh6KeG6aKR5Y+v6I635b6X5LiA5qyh5oq95aWW5py65Lya77yM5q+P5qyh5oq95aWW5Ya35Y205pe26Ze05Li6NeWIhumSnyDlhrfljbTml7bpl7TorqnmnI3liqHlmajlgZpcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA+IDApIHtcbiAgICAgICAgICAgIC8vIOaKveWlluWAkuiuoeaXtiA+PTAg5Luj6KGo5Y+v5Lul5oq95aWW77yMPDAg5Y+W57ud5a+55YC8IOWAkuaVsOenkuaVsFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICh0aGlzLmJlZ2luVHVybikge1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sXG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5hbmdsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2lyY2xlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJAg6KGo56S66L2s5LqG5Lik5ZyIXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IDQuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDQuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcGVlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8PSA1ICYmIHRoaXMucG9pbnQuYW5nbGUgPD0gdGhpcy5lbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5UdXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IHRoaXMuZW5kQW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g562+5YiwXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1NpZ24pIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuiOt+WPluetvuWIsOWlluWKsVwiKTtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOWunuaXtuabtOaWsOetvuWIsOeVjOmdolxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25JblwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaWduRGF5ID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyB0aGlzLnNpZ25EYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YeaVsOaNriBnY+WlluWKseWFg+WunSBjYXJkIDDmnKrojrflvpcgMeW8gCwy5b+DLDPnn79cbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi5LiJ5YWD57qi5YyFXCIsIFwi54K46I2veDFcIiwgXCLoja/msLR4MVwiLCBcIjUwMOWFg+WunVwiLCBcIjguODjlhYPnuqLljIVcIiwgXCLml7bpkp94MVwiLCBcIjE4Ljg45YWD57qi5YyFXCJdXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoYXJyW3RoaXMuc2lnbkRheSAtIDFdLCBBV0FSRFtcIkRBWV9cIiArIHRoaXMuc2lnbkRheV0sIGRhdGEuZ2MsIGRhdGEuY2FyZClcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1RhYmxlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgICAgICBcIjEwXCI6IDI0MCxcbiAgICAgICAgICAgICAgICBcIjExXCI6IDE4MCxcbiAgICAgICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgICAgICBcIjMxXCI6IDM2MCxcbiAgICAgICAgICAgICAgICBcIjMyXCI6IDMwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0xvdHRlcnlcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gb2JqW1wiXCIgKyByZXMuZGF0YS5hd2FyZF07XG4gICAgICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIueCuOW8uXgxXCIsIGluZGV4OiBBV0FSRC5CT09NIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMVwiOiB7IG5hbWU6IFwi5LqU5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICAgICAgICAgIH0sIDQuNSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDmmL7npLrlvLnlh7rojrflvpfnianlk4HnmoTlvLnnqpdcbiAgICAvLyDlpZblk4HnsbvlnosgMS7kvZPlipsgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMzEu5LqU5YWD57qi5YyFIDMyLuWNgeWFg+e6ouWMhVxuICAgIHNob3dQb3AoZ29vZE5hbWUsIGdvb2ROdW1iZXIsIGdjTnVtYmVyLCB0ZXh0TnVtYmVyKSB7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0ZXh0LnN0cmluZyA9IGDojrflvpcke2dvb2ROYW1lfWA7XG4gICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF3YXJkRnJhbWVzW2dvb2ROdW1iZXJdO1xuICAgICAgICBsZXQgbGF5b3V0MSA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8xXCIpO1xuICAgICAgICBsZXQgbGF5b3V0MiA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICBpZiAoZ2NOdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYmwgPSBsYXlvdXQxLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYOiOt+W+l+WFg+WunSske2djTnVtYmVyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHROdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpY29uID0gbGF5b3V0Mi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5UZXh0RnJhbWVzW3RleHROdW1iZXIgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRXeExvZ2luKCkge1xuICAgICAgICAvLyDmuIXmjol0b2tlblxuICAgICAgICBjYy53eFRva2VuID0gbnVsbDtcbiAgICAgICAgY2Mud3hMb2dpblJlc3VsdGNvZGUgPSBudWxsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuumakOengeaUv+etllxuICAgIHNob3dVc2VyUHJpdmFjeSgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8g6K6+572u55So5oi35Y2P6K6uXG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MD5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3587Rv7sxDF50sBHdGpncc', 'MD5');
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
                    var __filename = 'preview-scripts/assets/Script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0a35WjyStJPpmP4ZgIidJg', 'Main');
// Script/Main.js

"use strict";

var _Config = _interopRequireDefault(require("./Config"));

var _Level = _interopRequireDefault(require("./Level"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入 得分等配置 太长 所以换个文件写
cc.Class({
  "extends": cc.Component,
  properties: {
    //钩子速度
    speed: {
      "default": 3,
      displayName: '钩子速度'
    },
    //钩子旋转速度
    rotateSpeed: {
      "default": 1,
      displayName: '钩子旋转速度'
    },
    //钩子范围
    HookRange: {
      "default": 70,
      displayName: '钩子旋转角度范围'
    },
    //所有的prefab 这种方式是同步的 代码比较好写 就是难拖
    Prefabs: {
      "default": [],
      type: cc.Prefab
    },
    InitTime: {
      "default": 10
    },
    //钩子触碰到物品的声音
    CollisionAudio: {
      type: cc.AudioClip,
      "default": null
    },
    //加分的声音
    AddScroeAudio: {
      type: cc.AudioClip,
      "default": null
    },
    // 道具的纹理
    PropSpriteFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    Boom: {
      type: cc.Prefab,
      "default": null
    },
    HookFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    HeroFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    LotteryFramse: {
      type: cc.SpriteFrame,
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    /**
     * 初始化
     */
    this.init(); //加载首页资源

    cc.director.preloadScene('Index');
  },
  setGuide: function setGuide() {
    var index = this.guideIndex;

    if (index <= 3) {
      var guide = cc.find('Canvas/Guide');
      guide.getChildByName("guide_" + index).active = true;
    } else {
      this.guide = false;
      cc.find('Canvas/Guide').active = false;
    }
  },
  nextGuide: function nextGuide(e, msg) {
    var guide = cc.find('Canvas/Guide');
    var guide_1 = guide.getChildByName("guide_1");
    var guide_2 = guide.getChildByName("guide_2");
    var guide_3 = guide.getChildByName("guide_3");
    guide_1.active = false;
    guide_2.active = false;
    guide_3.active = false;

    if (msg === "2") {
      cc.sys.localStorage.setItem("guide", 2);
      guide.getChildByName("guide_2").active = true;
    } else if (msg === "3") {
      cc.sys.localStorage.setItem("guide", 3);
      guide.getChildByName("guide_3").active = true;
    } else if (msg === "4") {
      this.guide = false;
      this.ResumeGameLayer();
      cc.sys.localStorage.setItem("guide", 4);
      cc.find('Canvas/Guide').active = false;
    }
  },
  hideNeedLayer: function hideNeedLayer() {
    var _this = this;

    // 如果开始游戏 那么刷新一下道具数据
    cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
      var sendDta = {
        prop: 4
      };
      cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {
        console.log("使用体力成功");
      });
      cc.zm.LevelInfo = res.data; // 关闭界面开始游戏

      _this.NeedLayer.active = false; // 点击开始游戏之前 重新同步一下道具信息
      // 隐藏banner

      cc.Tools.hideBanner();

      _this.handleDaoju();

      _this.adjusBoomLayout();

      _this.ResumeGameLayer(); // 对关卡进行打点


      if (cc.zm.LevelInfo.stage <= 5) {
        cc.Tools.dot("start_" + cc.zm.LevelInfo.stage);
      }
    });
  },
  hideLotteryLayer: function hideLotteryLayer() {
    this.LotteryLayer.active = false;
  },
  showBackLayer: function showBackLayer() {
    this.BackLayer.active = true;
    this.PauseGameLayer();
  },

  /**
   * @description 初始化 各种需要的比变量
   */
  init: function init() {
    var _this2 = this;

    //钩子矿工
    this.Miner = cc.find('Canvas/Header/Miner'); //矿工动画 
    //获取钩子

    this.Hook = cc.find('Canvas/Header/Miner/Hook'); //获取钩子初始长度

    this.HookHeight = this.Hook.height; //放下钩子开关 0 停止 1 发射 2拉回

    this.HookState = 0;
    this.curScore = 0;
    this.pauseGame = false; // 初始化矿工的精灵帧

    this.MinerSp = this.Miner.getComponent("sp.Skeleton"); // 看视频得体力界面

    this.seeVideoLayer = cc.find('Canvas/SeeVideolayer'); //得分累计

    this.Score = cc.find('Canvas/ScoreAndTarget/Score').getComponent(cc.Label); //通关目标分数

    this.TargetScore = cc.find('Canvas/ScoreAndTarget/Target').getComponent(cc.Label); //倒计时

    this.Time = cc.find('Canvas/CheckpointAndTime/Time').getComponent(cc.Label); //关卡数

    this.Checkpoint = cc.find('Canvas/CheckpointAndTime/Checkpoint').getComponent(cc.Label);
    this.NeedLayer = cc.find('Canvas/NeedLayer');
    this.BackLayer = cc.find('Canvas/BackLayer');
    this.PropNode = cc.find('Canvas/Header/Prop');
    this.LotteryLayer = this.NeedLayer.getChildByName("LotteryLayer"); //物品区域

    this.itemArea = cc.find('Canvas/ItemArea'); //开启碰撞

    this.manager = cc.director.getCollisionManager();
    this.manager.enabled = true; // this.manager.enabledDebugDraw = true;
    // manager.enabledDrawBoundingBox = true;
    //重组prefab数组 方便查询

    this.Prefab = {};
    this.Prefabs.forEach(function (item) {
      _this2.Prefab[item._name] = item;
    }); //发射钩子按钮

    var emitHook = cc.find('Canvas/emitHookBtn'); //弹出框

    this.Mask = cc.find('Canvas/Mask'); //游戏结束按钮 包括过关/结束游戏

    this.Mask.on(cc.Node.EventType.TOUCH_END, this.CloseMask.bind(this));
    emitHook.on(cc.Node.EventType.TOUCH_END, this.emitHookBtn.bind(this));
    this.boomNumber = -1;
    this.liquidNumber = 0;
    this.adjusBoomLayout();
    cc.Tools.screenAdapter();
    this.ResetInfo();
    this.StartTime();
    this.SetLevel();
    this.CreateTargetScore();
    this.CreateItem();
    this.redPack = this.levelInfo.redPack;
    this.extarRedPack = 0; // 是否新手引导

    this.guideIndex = parseInt(cc.sys.localStorage.getItem("guide"));

    if (this.guideIndex < 4 && this.guideIndex >= 1) {
      this.guide = true; // 有新手引导暂停游戏

      this.PauseGameLayer();
      cc.find('Canvas/Guide').active = true;
      this.setGuide();
    } else {
      this.guide = false;
      this.PauseGameLayer();
      cc.find('Canvas/Guide').active = false;
      this.NeedLayer.active = true;
      var needScore = this.NeedLayer.getChildByName("needScore").getComponent(cc.Label);
      var needLevel = this.NeedLayer.getChildByName("needLevel").getComponent(cc.Label);
      needScore.string = "\u8981\u6C42\u5206\u6570\uFF1A" + this.levelInfo.score;
      needLevel.string = "\u7B2C" + this.levelInfo.id + "\u5173"; // 抽奖选关卡
      // 前端随机一个道具
      // 炸弹：10 11时钟 13药水

      var arr = [10, 11, 13];
      var rdm = this.createRandm(0, 2);
      var prop = arr[rdm];
      this.LotteryProp = prop;
      var icon = this.LotteryLayer.getChildByName("icon").getComponent(cc.Sprite);

      if (prop === 10) {
        // 当前是炸弹
        icon.spriteFrame = this.LotteryFramse[2];
      } else if (prop === 11) {
        icon.spriteFrame = this.LotteryFramse[0];
      } else if (prop === 13) {
        icon.spriteFrame = this.LotteryFramse[1];
      }
    }
  },
  LookVideoGetAward: function LookVideoGetAward() {
    var _this3 = this;

    cc.Tools.showJiliAd();
    var sendData = {
      "ad": cc.zm.ad,
      "weapon": this.LotteryProp
    };
    cc.Tools.sendRequest("pit.v1.PitSvc/Lottery2", "POST", sendData).then(function (res) {
      // 炸弹：10 11时钟 13药水
      _this3.LotteryAward = res.data.award;

      _this3.hideLotteryLayer();
    });
  },
  // 使用道具
  handleDaoju: function handleDaoju() {
    var _this4 = this;

    // 道具的数量为
    var weapon = cc.zm.LevelInfo.weapon; // prop类型 10.炸弹 11.时钟 12.石化手册 13.药水 14.三叶草
    // 处理道具 道具分别为 炸弹 boomNumber 时钟 clockNumber 石化手册 handbookNumber 药水 liquidNumber 三叶草 cloverNumber

    var data = {
      "1": "体力",
      "10": "炸弹",
      "11": "时钟",
      "12": "石化手册",
      "13": "药水",
      "14": "三叶草"
    };

    var _loop = function _loop(i) {
      if (weapon[i].prop === 10) {
        // 当前是炸弹
        _this4.boomNumber = weapon[i].num - 1;
      } else {
        // 如果是其他物品那么直接使用
        if (weapon[i].num) {
          // 直接使用
          var sendDta = {
            prop: weapon[i].prop
          };
          cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {
            console.log("使用成功-", data[weapon[i].prop]);
          });
        }
      }

      if (weapon[i].prop === 11) {
        _this4.clockNumber = weapon[i].num;
      }

      if (weapon[i].prop === 12) {
        _this4.handbookNumber = weapon[i].num;
      }

      if (weapon[i].prop === 13) {
        _this4.liquidNumber = weapon[i].num;
      }

      if (weapon[i].prop === 14) {
        _this4.cloverNumber = weapon[i].num;
      }
    };

    for (var i = 0; i < weapon.length; i++) {
      _loop(i);
    }
  },

  /**
   * @description 钩子旋转
   */
  HookRoTate: function HookRoTate() {
    if (this.HookState) return; //限制范围 只能在 70 与 -70 之间

    if (this.Hook.angle >= 70) {
      this.rotateSpeed = -this.rotateSpeed;
    } else if (this.Hook.angle <= -70) {
      this.rotateSpeed = Math.abs(this.rotateSpeed);
    }

    ;
    this.Hook.angle += this.rotateSpeed;
  },

  /**
   * @description 发射钩子按钮事件
   */
  emitHookBtn: function emitHookBtn() {
    //TODO 停止钩子旋转
    //打开/关闭 钩子开关 没有拉回之前 当前position ！= 初始位置时 不允许操作
    if (this.HookState) return; // 当前发射绳子

    this.MinerSp.setAnimation(0, "fang", true);
    this.HookState = 1;
  },

  /**
   * @description 发射钩子
   */
  emitHook: function emitHook() {
    switch (this.HookState) {
      case 1:
        this.Hook.height += this.speed;
        break;

      case 2:
        if (this.Hook.height <= this.HookHeight) {
          //检测是否拉回物品
          if (this.Hook.children[0]) {
            if (this.Hook.children[0].childrenCount) {
              this.Handle(this.Hook.children[0].children); //停止播放拉回动画

              this.MinerSp.setAnimation(0, "idle3", false);
              this.MinerSp.addAnimation(0, "idle", true);
            } else {
              this.MinerSp.setAnimation(0, "idle", true);
            }
          }

          this.StopHookMove();
        } else {
          this.Hook.height -= this.speed;
        }

        ;
        break;
    }

    ;
  },

  /**
   * @description 拉回钩子
   */
  PullBackHook: function PullBackHook() {
    //播放拉回钩子动画
    // 将钩子的图片转化
    this.MinerSp.setAnimation(0, "la", true);
    this.HookState = 2;
  },

  /**
   * 设置钩子拉回的速度
   */
  SetSpeed: function SetSpeed(other) {
    // 是否有药水效果 如果有那么speed速度增加10%
    var promote = 1;
    _Config["default"][other.node.name] = _Config["default"][other.node.name] || {};

    if (this.liquidNumber) {
      console.log("药水效果速度增加10%");
      promote = 1.1;
    }

    this.speed = _Config["default"][other.node.name].speed * promote || 10;
  },

  /**
   * 重置所有分数信息
   */
  ResetInfo: function ResetInfo() {
    //this.victory 游戏胜利失败状态 0 = 游戏中 1 = 成功 2 = 失败
    this.victory = this.Score.string = this.Time.string = this.Checkpoint.string = this.TargetScore.string = 0;
  },

  /**
   * 启动倒计时
   */
  StartTime: function StartTime() {
    // 是否存在时钟 存在时钟 this.InitTime+10秒
    if (this.clockNumber) {
      console.log("使用时钟成功+10s");
      this.clockNumber = 0;
      this.InitTime += 10;
    }

    this.Time.string = this.InitTime;

    this.timer = function () {
      this.InitTime--;
      this.Time.string = this.InitTime;

      if (this.InitTime <= 0) {
        this.unschedule(this.timer);
        this.GameOver();
      }

      ;
    };

    this.schedule(this.timer, 1);
  },

  /**
   * 设置关卡数
   */
  SetLevel: function SetLevel() {
    this.levelInfo = _Level["default"]["level" + cc.zm.LevelInfo.stage]; // this.levelInfo = Level["level15"]

    this.Score.string = cc.zm.LevelInfo.current_score;
    this.Checkpoint.string = "" + cc.zm.LevelInfo.stage;
  },

  /**
   * 确定过关目标分数
   * 目标分数根据关卡关数确定 难度累加率为
   *  基数 1000
   *  每关递增500分
   * 
   * 最大 5000分
   */
  CreateTargetScore: function CreateTargetScore() {
    this.TargetScore.string = this.levelInfo.score;
  },

  /**
   * 生成物品 需要根据目标分来生成 生成的所有物品总分必须比目标过关分数高20%
   * 生成的物品数量在 10-30
   */
  CreateItem: function CreateItem() {
    var _this5 = this;

    var newItemArr = this.newCreateCalc(); // 写一个算法 根据分数先将arr 排序 总分不能超过最大分数 如果超了 则从小开始减少 直到分数小于最大分数
    //生成相应的Prfab

    console.log("itemArr=", newItemArr);
    newItemArr.forEach(function (item) {
      var node = cc.instantiate(_this5.Prefab[item.name]);

      var XY = _this5.randomXY(node);

      node.parent = _this5.itemArea;

      if (item.score) {
        node.score = item.score;
      }

      if (item.prop) {
        node.extra = item.prop;
      }

      node.setPosition(XY);

      if (item.name === "Tnt") {
        var boom = cc.instantiate(_this5.Boom);

        _this5.node.addChild(boom);

        boom.name = "tntBoom";
        boom.setPosition(cc.v2(XY.x, XY.y - 218));
        node.boom = boom;
      }
    }); // todo先不创建老鼠试试

    if (this.levelInfo.mouse) {
      var data = this.levelInfo.mouse.split(","); // 普通老鼠

      var mouseNumber = Number(data[0]);

      if (mouseNumber > 0) {
        for (var i = 0; i < mouseNumber; i++) {
          var node = cc.instantiate(this.Prefab["Mouse"]);
          var randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);
          var randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2);
          var pos = cc.v2(randX, randY);
          node.parent = this.itemArea;
          node.score = 50;
          node.setPosition(pos);
          this.moveMouse(node);
        }
      }

      var DrillMouseNumber = Number(data[1]);

      if (DrillMouseNumber > 0) {
        for (var _i = 0; _i < DrillMouseNumber; _i++) {
          var _node2 = cc.instantiate(this.Prefab["DrillMouse"]);

          var _randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);

          var _randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2);

          var _pos2 = cc.v2(_randX, _randY);

          _node2.parent = this.itemArea;
          _node2.score = 700;

          _node2.setPosition(_pos2);

          this.moveMouse(_node2);
        }
      }
    }
  },
  // 生成的物品是可动的
  moveMouse: function moveMouse(mouse) {
    // 先将老鼠移动到最右边 时间为600/距离*5
    var _moveTime = 10;

    var time = parseInt(300 - mouse.x) / 600 * _moveTime;

    cc.tween(mouse).to(time, {
      x: 300
    }).start();
    this.scheduleOnce(function () {
      // 现在开始 老鼠做规律运动先将老鼠反转
      if (mouse.name !== "") {
        mouse.scaleX = -1;
        cc.tween(mouse).repeatForever(cc.tween().to(_moveTime, {
          x: -300
        }).delay(1).call(function () {
          mouse.scaleX = 1;
        }).to(_moveTime, {
          x: 300
        }).delay(1).call(function () {
          mouse.scaleX = -1;
        })).start();
      }
    }, time + 1);
  },
  // 写一个算法。。一只有一个总数量 可以得到 各个物品的数量
  newCreateCalc: function newCreateCalc() {
    var createItemArr = []; // 先生成红包跟神秘物品

    if (this.levelInfo.extra) {
      var extra = this.levelInfo.extra.split(","); // 0是红包 创建一个红包

      if (extra[0]) {
        var _arr = [];
        var obj = {
          "name": "Red",
          // 开出的红包金额
          "prop": 0.1,
          "width": 70
        };

        _arr.push(obj);

        createItemArr = [].concat(createItemArr, _arr);
      }

      if (extra[1]) {
        var _arr2 = [];
        var _prop = null; // 当前是神秘物品 先随机出物品 是否有三叶草 如果有 药水的随机概率增加

        if (this.cloverNumber) {
          var arr = ["炸弹", "3元红包", "5元红包", "药水", "药水"];
          var rmd = this.createRandm(0, 4);
          _prop = arr[rmd];
        } else {
          var _arr3 = ["炸弹", "3元红包", "5元红包", "药水"];

          var _rmd = this.createRandm(0, 3);

          _prop = _arr3[_rmd];
        }

        var _obj = {
          "name": "Mystery",
          // 开出的红包金额
          "prop": _prop,
          "width": 71
        };

        _arr2.push(_obj);

        createItemArr = [].concat(createItemArr, _arr2);
      }
    }

    if (this.levelInfo.boom) {
      for (var i = 0; i < this.levelInfo.boom; i++) {
        var _arr4 = [];
        var _obj2 = {
          "name": "Tnt",
          "width": 77
        };

        _arr4.push(_obj2);

        createItemArr = [].concat(createItemArr, _arr4);
      }
    } // 根据积分 生成对应个数


    if (!this.levelInfo.good) {
      return createItemArr;
    }

    var info = this.levelInfo.good.split(","); // let maxScore = this.levelInfo.maxScore;

    var scoreArr = [];

    for (var _i2 = 0; _i2 < info.length; _i2++) {
      var _info = info[_i2].split("|");

      var type = _info[0];
      var percent = Number(_info[1]);

      var _newArr = this.createByType(type, percent);

      scoreArr = [].concat(scoreArr, _newArr);
    } // 将积分数组排序


    var _scoreArr = scoreArr.sort(function (a, b) {
      if (a.score > b.score) {
        return -1;
      }

      if (a.score < b.score) {
        return 1;
      }

      return 0;
    }); // 计算所有arr中的分数是不是超过 本关的最大值 如果超过那么从后往前计算值


    var newArr = [];
    var totalScore = this.levelInfo.maxScore;
    var _score = 0;

    for (var _i3 = 0; _i3 < _scoreArr.length; _i3++) {
      _score += _scoreArr[_i3].score;

      if (_score <= totalScore) {
        newArr.push(_scoreArr[_i3]);
      } else {
        break;
      }
    }

    createItemArr = [].concat(createItemArr, newArr);
    console.log("createItemArr未按照宽度排序=", createItemArr); // 将createItemArr排序按照宽度

    createItemArr = createItemArr.sort(function (a, b) {
      if (a.width > b.width) {
        return -1;
      }

      if (a.width < b.width) {
        return 1;
      }

      return 0;
    });
    console.log("createItemArr照宽度排序=", createItemArr);
    return createItemArr;
  },
  // 根据积分跟类型生成数量name
  createByType: function createByType(type, score) {
    var arr = [];
    var _score = 0;

    switch (type) {
      case "b":
        // 当前是石块 是否有化石手册 如果有 石头的价值提升20% todo
        var promote = 1;

        if (this.handbookNumber) {
          console.log("石化手册使用成功石头的价值提升20%");
          promote = 1.2;
        }

        for (var i = 0; i < 30; i++) {
          var name = "Stone-";
          var scoreCig = [20, 30, 40];
          var widthCig = [42, 89, 154];
          var rdm = this.createRandm(0, 2);
          _score += scoreCig[rdm];

          if (_score > score) {
            break;
          }

          var obj = {
            "name": name + rdm,
            "score": scoreCig[rdm] * promote,
            "width": widthCig[rdm]
          };
          arr.push(obj);
        }

        break;

      case "g":
        // 当前是黄金
        for (var _i4 = 0; _i4 < 30; _i4++) {
          var _name = "Gold-";
          var _scoreCig = []; // 根据当前积分的最大值动态生成数组

          var __score = score - _score;

          if (__score >= 300) {
            _scoreCig = [50, 100, 150, 200, 300];
          } else {
            var _key = Math.floor(__score / 50);

            var key = _key > 4 ? 4 : _key;

            for (var k = 0; k < key; k++) {
              _scoreCig.push(50 * (1 + k));
            }
          }

          var width = {
            "50": 36,
            "100": 62,
            "150": 83,
            "200": 108,
            "300": 146
          };

          var _rdm = this.createRandm(0, _scoreCig.length - 1);

          _score += _scoreCig[_rdm];

          if (_score > score) {
            break;
          }

          if (_scoreCig.length === 0) {
            break;
          }

          var _obj3 = {
            "name": _name + _rdm,
            "score": _scoreCig[_rdm],
            "width": width["" + _scoreCig[_rdm]]
          };
          arr.push(_obj3);
        }

        break;

      case "d":
        // 当前是钻石
        for (var _i5 = 0; _i5 < 30; _i5++) {
          var _name2 = "Drill";
          _score += 400;

          if (_score > score) {
            break;
          }

          var _obj4 = {
            "name": _name2,
            "score": 400,
            "width": 29
          };
          arr.push(_obj4);
        }

        break;

      case "m":
        // 当前是神秘物品
        for (var _i6 = 0; _i6 < 30; _i6++) {
          var _name3 = "Mystery";
          var _scoreCig2 = null;

          if (score - _score > 200) {
            _scoreCig2 = this.createRandm(30, 200);
          } else if (score - _score > 30) {
            _scoreCig2 = this.createRandm(30, score - _score);
          } else {
            _scoreCig2 = 30;
          }

          _score += _scoreCig2;

          if (_score > score) {
            break;
          }

          var _obj5 = {
            "name": _name3,
            "prop": _scoreCig2,
            "width": 71
          };
          arr.push(_obj5);
        }

        break;
    }

    return arr;
  },

  /**
   * 随机坐标 判断这个坐标产生的rect是否跟其他的所有的物品的rect相接触 如果没有返回坐标 如果接触重新随机
   */
  randomXY: function randomXY(item) {
    //x = 屏幕宽度 / 2 * 随机数
    //y = 地平面位置 + 随机数cc.random0To1() +高度范围（可以说是Y的最小点）
    //地平面位置 = 地面y + 地面 高度 / 2
    // - 30是因为物品锚点在中间位置 设置坐标到范围定点的时候 会有部分超出
    var groundY = this.itemArea.y + this.itemArea.height / 2;
    var randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);
    var randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2); // 随机生成的一个坐标

    var pos = cc.v2(randX, randY);
    var rect = new cc.Rect(pos.x - item.width / 2, pos.y - item.height / 2, item.width, item.height);

    if (this.itemArea.children.length >= 1) {
      var isPeng = false;

      for (var i = 0; i < this.itemArea.children.length; i++) {
        var n = this.itemArea.children[i];
        var boundingBox = n.getBoundingBox();

        if (boundingBox.intersects(rect)) {
          isPeng = true;
          break;
        }
      }

      if (isPeng) {
        return this.randomXY(item);
      } else {
        return pos;
      }
    } else {
      return pos;
    }
  },

  /**
   * @description 炸弹范围的物品进行销毁
   * @param {cc.Node} Tnt
   * @returns 
   */
  destroyTnt: function destroyTnt(Tnt) {
    // 遍历this.itemArea内所有的节点 当节点的中心节点在炸弹内 则销毁
    for (var i = this.itemArea.children.length - 1; i >= 0; i--) {
      var n = this.itemArea.children[i];

      if (n !== Tnt) {
        // 通过Tnt的中心位置 创建一个rect区域
        var _pos = Tnt.getPosition(cc.v2());

        var rect = new cc.Rect(_pos.x - 125, _pos.y - 125, 250, 250);
        var pos = n.getPosition(cc.v2());

        if (rect.contains(pos)) {
          n.removeFromParent();
          n.destroy();
          n = null;
        }
      }
    }
  },

  /**
   * 生成n-m随机数
   */
  createRandm: function createRandm(n, m) {
    m += 1;
    var a = m - n;
    var num = Math.random() * a + n;
    return parseInt(num);
  },

  /**
   * @description 关闭绳子状态
   */
  StopHookMove: function StopHookMove() {
    this.HookState = 0;
    this.Hook.height = this.HookHeight; //重置发射钩子速度

    this.speed = 6;
    this.Hook.getChildByName("hook_1").getComponent(cc.Sprite).spriteFrame = this.HookFrames[0];
  },

  /**
   * @description 处理拉回的物品，删除物品以及添加得分
   */
  Handle: function Handle(items) {
    this.AddProp(items);
    this.AddScore(items);
    this.RemoveItem(items); // 判断是否还有物品在地图上 如果没有那么结算 结束

    if (this.itemArea.children.length === 0) {
      // 地图物品消失 结算
      // todo
      this.GameOver();
    }

    if (this.node.getChildByName("boom")) {
      var boom = this.node.getChildByName("boom");
      boom.removeFromParent();
      boom.destroy();
      boom = null;
    }
  },
  // 调整现有的炸弹的现实效果
  adjusBoomLayout: function adjusBoomLayout() {
    var layout = this.PropNode.getChildByName("Layout");
    layout.active = true;

    if (this.boomNumber >= 2) {
      this.boomNumber = 2;
    }

    for (var i = 0; i < 3; i++) {
      var boom = layout.children[i];

      if (i <= this.boomNumber) {
        boom.active = true;
      } else {
        boom.active = false;
      }
    }
  },

  /**
   * @description 获得道具
   */
  AddProp: function AddProp(items) {
    if (!items[0]) return;

    if (items[0].name === "Mystery") {
      var prop = items[0].extra;

      if (isNaN(prop)) {
        switch (prop) {
          case "炸弹":
            this.boomNumber++;
            this.adjusBoomLayout();
            this.showMestery(0);
            break;

          case "3元红包":
            this.showMestery(1);
            this.extarRedPack += 3;
            break;

          case "5元红包":
            this.showMestery(2);
            this.extarRedPack += 5;
            break;

          case "药水":
            this.showMestery(3);
            break;
        }
      } else {
        // 当前是积分
        this.Score.string = parseInt(this.Score.string) + (prop || 0);
        this.curScore += prop || 0;
        this.addAnim("score", prop);
      }

      if (cc.zm.showMusic) {
        cc.audioEngine.play(this.AddScroeAudio);
      }
    } else if (items[0].name === "Red") {
      // 随机3-8块钱 2位有效小数
      var extraRedPack = Math.floor(this.createRandm(300, 800)) / 100;
      this.extarRedPack += extraRedPack;
      this.addAnim("red", extraRedPack);

      if (cc.zm.showMusic) {
        cc.audioEngine.play(this.AddScroeAudio);
      }
    }
  },
  showMestery: function showMestery(type) {
    // ["炸弹","3元红包","5元红包","药水"]
    var mestery = this.PropNode.getChildByName("Mestery");
    mestery.active = true;
    mestery.getComponent(cc.Sprite).spriteFrame = this.PropSpriteFrames[type];
    mestery.stopAllActions();
    cc.tween(mestery).to(2, {
      y: mestery.y + 100,
      opacity: 0
    }).call(function () {
      mestery.opacity = 255;
      mestery.y -= 100;
      mestery.active = false;
    }).start();
  },

  /**
   * @description 删除物品
   */
  RemoveItem: function RemoveItem(items) {
    items.forEach(function (item) {
      if (item) {
        item.destroy();
        item = null;
      }
    });
  },

  /**
   * @description 添加得分
   */
  AddScore: function AddScore(items) {
    if (!items[0]) return;
    if (!items[0].score) return; // let scoreCon = ItemAttr[items[0].name] || {};

    this.Score.string = parseInt(this.Score.string) + (items[0].score || 0);
    this.curScore += items[0].score || 0; //播放得分音效

    if (cc.zm.showMusic) {
      cc.audioEngine.play(this.AddScroeAudio);
    } // 增加一个增加积分飘向--->Score位置点动画


    this.addAnim("score", items[0].score);
  },
  // 做一个增加积分点动画
  addAnim: function addAnim(type, score) {
    var add = null;

    if (type === "score") {
      add = this.Score.node.parent.getChildByName("addScore");
    } else if (type === "red") {
      add = this.Score.node.parent.getChildByName("addRed");
    }

    add.getComponent(cc.Label).string = "+" + score;
    add.stopAllActions();
    add.opacity = 0;
    add.y = -132;
    cc.tween(add).to(0.1, {
      opacity: 255
    }).to(1, {
      y: 42
    }).to(0.1, {
      opacity: 0
    }).start();
  },

  /**
   * 显示Mask victory=0 victory=1胜利 victory=2失败
   */
  ShowMask: function ShowMask() {
    var _this6 = this;

    //显示弹出框
    cc.Tools.showBanner();
    this.Mask.active = true; // this.PauseGameLayer()

    var Fail = this.Mask.getChildByName("Fail");
    var Success = this.Mask.getChildByName("Success");
    Fail.active = false;
    Success.active = false;

    if (cc.zm.LevelInfo.stage <= 5) {
      cc.Tools.dot("end_" + cc.zm.LevelInfo.stage);
    }

    if (this.victory === 1) {
      Success.active = true; // 通关成功打点

      cc.Tools.dot("through", {
        level_num: cc.zm.LevelInfo.stage,
        level_result: "成功"
      }); // 设置目标内容

      var lbl = Success.getChildByName("lbl").getComponent(cc.Label); // 像服务器发送每日任务请求

      cc.Tools.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function (res) {
        // console.log("七日任务列表=", res.data);
        var items = res.data.items;
        var item = null;

        for (var i = 0; i < items.length; i++) {
          if (!items[i].status) {
            // 未领取
            item = items[i];
            break;
          }
        } // lbl.string = `每日任务达成条件，看广告${item.curr_ad}/+${item.need_ad},需要通关${item.curr_pass_stage}/+${item.need_pass_stage}`
        // 判断各种条件
        // 先判断用户关卡条件


        lbl.string = "";

        if (item.curr_pass_stage < item.need_pass_stage) {
          // 当前关卡等级小于需要关卡等级
          lbl.string = "\u901A\u5173" + item.need_pass_stage + "\u5173\u540E\u53EF\u63D0\u73B0";
        } else {
          // 关卡等级达成 判断第二条件 
          if (item.curr_sign_in < item.need_sign_in) {
            lbl.string = "\u5B8C\u6210\u4ECA\u65E5\u7B7E\u5230\u53EF\u63D0\u73B0";
          } else {
            if (item.curr_ad < item.need_ad) {
              lbl.string = "\u518D\u770B" + (item.need_ad - item.curr_ad) + "\u4E2A\u89C6\u9891\u53EF\u63D0\u73B0";
            }
          }
        }
      });
      var awrad = Success.getChildByName("award").getComponent(cc.Label);
      awrad.string = "\u5956\u52B1\u7EA2\u5305+" + this.redPack;

      if (cc.zm.LevelInfo.ever_pass) {
        awrad.node.active = false;
      }

      var extatAward = Success.getChildByName("layout").getChildByName("extraAward").getComponent(cc.Label);

      if (this.extarRedPack) {
        extatAward.node.parent.active = true;
        extatAward.string = "+" + this.extarRedPack;
      } else {
        extatAward.node.parent.active = false;
      } // 成功或者失败发送数据 red_pack:红包 score:分数 ts：时间戳 sign MD5数据
      // 


      var sendData = {
        "bomb": this.boomNumber + 1,
        //炸弹个数
        "potion": this.liquidNumber,
        //药水
        "score": this.curScore,
        //分数
        "ts": new Date().getTime() //时间戳

      };
      var data = cc.Tools.createSignData(sendData);
      cc.Tools.sendRequest("pit.v1.PitSvc/Pass", "POST", data).then(function (res) {
        console.log("Pass通关成功返回信息", res);
      });
    } else if (this.victory === 2) {
      Fail.active = true;
      cc.Tools.dot("through", {
        level_num: cc.zm.LevelInfo.stage,
        level_result: "失败"
      }); // 通关失败不用告诉服务器
    }

    cc.tween(this.Mask).to(0.3, {
      scale: 1
    }).call(function () {
      _this6.PauseGameLayer();
    }).start();
  },

  /**
   * 恢复游戏，关闭弹出框
   * 如果是游戏通关原因而打开的弹出框不予理睬
   */
  CloseMask: function CloseMask() {
    if (this.victory) return;
    this.ResumeGameLayer();
  },

  /**
   * 重玩本关
   */
  Reload: function Reload() {
    //停止倒计时
    this.timer && this.unschedule(this.timer); //重载场景

    cc.director.loadScene('Game');
  },

  /**
   * 继续下一关
   */
  Next: function Next() {
    var _this7 = this;

    switch (this.victory) {
      case 0:
        //继续游戏
        this.CloseMask();
        break;

      case 1:
        // 过关成功点击进入下一关之前 先获取用户信息 看用户是否有体力
        var sendData = {};
        cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
          cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

          if (cc.zm.userInfo.power > 0) {
            cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
              cc.zm.LevelInfo = res.data;

              if (cc.zm.LevelInfo.stage < 30) {
                _this7.Reload();
              } else {
                // 直接返回主界面
                cc.director.loadScene('Index');
              }
            });
          } else {
            // 小于0 弹出看视频获得体力的接口
            _this7.seeVideoLayer.active = true;
          }
        });
        break;

      case 2:
        //退出游戏
        this.ExitGame();
        break;
    }

    ;
  },
  // 看视频得红包
  AwardVideo: function AwardVideo(e) {
    cc.log("看视频得奖励");
    cc.Tools.showJiliAd();
    var pack = cc.zm.LevelInfo.ever_pass ? 0 : this.redPack;
    var sendData = {
      "red_pack": parseInt((pack + this.extarRedPack) * 100),
      //红包
      "ad": cc.zm.ad
    };
    cc.zm.videoAd.redPack = sendData;
    this.timer && this.unschedule(this.timer);
  },
  // 看视频得体力
  seeVideoAward: function seeVideoAward(e) {
    cc.zm.videoAd.enterGame = true;
    cc.Tools.showJiliAd();
    var target = e.target;
    this.timer && this.unschedule(this.timer);
    target.parent.active = false;
  },
  closeLayer: function closeLayer(e) {
    var target = e.target;
    target.parent.active = false;
  },

  /**
   * 退出游戏 返回上一个场景
   */
  ExitGame: function ExitGame() {
    cc.director.loadScene('Index');
  },
  ResumeGameLayer: function ResumeGameLayer() {
    this.BackLayer.active = false;
    this.pauseGame = false;
    this.StartTime();
    this.MinerSp.paused = false;
  },
  // 暂停当前界面
  PauseGameLayer: function PauseGameLayer() {
    this.pauseGame = true;
    this.unschedule(this.timer);
    this.MinerSp.paused = true;
  },

  /**
   * 游戏结束
   * 胜利或失败都视为游戏结束
   */
  GameOver: function GameOver() {
    //判断用户得分是否超过目标分
    var s = 0;

    if (parseInt(this.Score.string) >= parseInt(this.TargetScore.string)) {
      s = 1;
    } else {
      //游戏失败
      s = 2;
    }

    ;
    this.victory = s;
    this.ShowMask();
  },
  // start () {
  // },
  update: function update(dt) {
    if (this.pauseGame) {
      return;
    }

    if (this.NeedLayer.active) {
      return;
    } // this.moveMouse();


    this.emitHook();
    this.HookRoTate();
  },
  // 使用道具
  useProp: function useProp(e, msg) {
    // 如果是炸弹
    switch (msg) {
      case "炸弹":
        // 当前的状态必须是绳子处于能拉回的状态
        // 检测是否有物品
        if (this.Hook.children[0].children[0] && this.boomNumber > -1) {
          // 使用炸弹像服务器发送消息
          if (cc.zm.showShake) {
            if (cc.sys.isNative) {
              jsb.Device.vibrate(0.3);
            }
          } // 先提前前端使用 是画面同步


          this.boomNumber--;
          this.adjusBoomLayout(); // 获取拉去的物品的位置

          var _node = this.Hook.children[0].children[0];

          var pos = _node.convertToWorldSpaceAR(cc.v2(0, 0)); // 添加炸弹效果


          var boom = cc.instantiate(this.Boom);
          boom.name = "boom";
          this.node.addChild(boom);
          var size = cc.view.getVisibleSize();
          boom.setPosition(cc.v2(pos.x - size.width / 2, pos.y - size.height / 2));
          boom.active = true;
          boom.getComponent(cc.Animation).play("boom");

          _node.destroy();

          _node = null;
          this.speed = 10;
          var sendDta = {
            prop: 10
          };
          cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta);
        }

        break;

      default:
        break;
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwiZGlzcGxheU5hbWUiLCJyb3RhdGVTcGVlZCIsIkhvb2tSYW5nZSIsIlByZWZhYnMiLCJ0eXBlIiwiUHJlZmFiIiwiSW5pdFRpbWUiLCJDb2xsaXNpb25BdWRpbyIsIkF1ZGlvQ2xpcCIsIkFkZFNjcm9lQXVkaW8iLCJQcm9wU3ByaXRlRnJhbWVzIiwiU3ByaXRlRnJhbWUiLCJCb29tIiwiSG9va0ZyYW1lcyIsIkhlcm9GcmFtZXMiLCJMb3R0ZXJ5RnJhbXNlIiwib25Mb2FkIiwiaW5pdCIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwic2V0R3VpZGUiLCJpbmRleCIsImd1aWRlSW5kZXgiLCJndWlkZSIsImZpbmQiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsIm5leHRHdWlkZSIsImUiLCJtc2ciLCJndWlkZV8xIiwiZ3VpZGVfMiIsImd1aWRlXzMiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiUmVzdW1lR2FtZUxheWVyIiwiaGlkZU5lZWRMYXllciIsIlRvb2xzIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGlkZUJhbm5lciIsImhhbmRsZURhb2p1IiwiYWRqdXNCb29tTGF5b3V0Iiwic3RhZ2UiLCJkb3QiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJIb29rIiwiSG9va0hlaWdodCIsImhlaWdodCIsIkhvb2tTdGF0ZSIsImN1clNjb3JlIiwicGF1c2VHYW1lIiwiTWluZXJTcCIsImdldENvbXBvbmVudCIsInNlZVZpZGVvTGF5ZXIiLCJTY29yZSIsIkxhYmVsIiwiVGFyZ2V0U2NvcmUiLCJUaW1lIiwiQ2hlY2twb2ludCIsIlByb3BOb2RlIiwiaXRlbUFyZWEiLCJtYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsIl9uYW1lIiwiZW1pdEhvb2siLCJNYXNrIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiQ2xvc2VNYXNrIiwiYmluZCIsImVtaXRIb29rQnRuIiwiYm9vbU51bWJlciIsImxpcXVpZE51bWJlciIsInNjcmVlbkFkYXB0ZXIiLCJSZXNldEluZm8iLCJTdGFydFRpbWUiLCJTZXRMZXZlbCIsIkNyZWF0ZVRhcmdldFNjb3JlIiwiQ3JlYXRlSXRlbSIsInJlZFBhY2siLCJsZXZlbEluZm8iLCJleHRhclJlZFBhY2siLCJwYXJzZUludCIsImdldEl0ZW0iLCJuZWVkU2NvcmUiLCJuZWVkTGV2ZWwiLCJzdHJpbmciLCJzY29yZSIsImlkIiwiYXJyIiwicmRtIiwiY3JlYXRlUmFuZG0iLCJMb3R0ZXJ5UHJvcCIsImljb24iLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkxvb2tWaWRlb0dldEF3YXJkIiwic2hvd0ppbGlBZCIsInNlbmREYXRhIiwiYWQiLCJMb3R0ZXJ5QXdhcmQiLCJhd2FyZCIsIndlYXBvbiIsImkiLCJudW0iLCJjbG9ja051bWJlciIsImhhbmRib29rTnVtYmVyIiwiY2xvdmVyTnVtYmVyIiwibGVuZ3RoIiwiSG9va1JvVGF0ZSIsImFuZ2xlIiwiTWF0aCIsImFicyIsInNldEFuaW1hdGlvbiIsImNoaWxkcmVuIiwiY2hpbGRyZW5Db3VudCIsIkhhbmRsZSIsImFkZEFuaW1hdGlvbiIsIlN0b3BIb29rTW92ZSIsIlB1bGxCYWNrSG9vayIsIlNldFNwZWVkIiwib3RoZXIiLCJwcm9tb3RlIiwiSXRlbUF0dHIiLCJub2RlIiwibmFtZSIsInZpY3RvcnkiLCJ0aW1lciIsInVuc2NoZWR1bGUiLCJHYW1lT3ZlciIsInNjaGVkdWxlIiwiTGV2ZWwiLCJjdXJyZW50X3Njb3JlIiwibmV3SXRlbUFyciIsIm5ld0NyZWF0ZUNhbGMiLCJpbnN0YW50aWF0ZSIsIlhZIiwicmFuZG9tWFkiLCJwYXJlbnQiLCJleHRyYSIsInNldFBvc2l0aW9uIiwiYm9vbSIsImFkZENoaWxkIiwidjIiLCJ4IiwieSIsIm1vdXNlIiwic3BsaXQiLCJtb3VzZU51bWJlciIsIk51bWJlciIsInJhbmRYIiwid2lkdGgiLCJyYW5kb20iLCJyYW5kWSIsInBvcyIsIm1vdmVNb3VzZSIsIkRyaWxsTW91c2VOdW1iZXIiLCJfbW92ZVRpbWUiLCJ0aW1lIiwidHdlZW4iLCJ0byIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwic2NhbGVYIiwicmVwZWF0Rm9yZXZlciIsImRlbGF5IiwiY2FsbCIsImNyZWF0ZUl0ZW1BcnIiLCJfYXJyIiwib2JqIiwicHVzaCIsIl9wcm9wIiwicm1kIiwiZ29vZCIsImluZm8iLCJzY29yZUFyciIsIl9pbmZvIiwicGVyY2VudCIsIm5ld0FyciIsImNyZWF0ZUJ5VHlwZSIsIl9zY29yZUFyciIsInNvcnQiLCJhIiwiYiIsInRvdGFsU2NvcmUiLCJtYXhTY29yZSIsIl9zY29yZSIsInNjb3JlQ2lnIiwid2lkdGhDaWciLCJfX3Njb3JlIiwiX2tleSIsImZsb29yIiwia2V5IiwiayIsImdyb3VuZFkiLCJyZWN0IiwiUmVjdCIsImlzUGVuZyIsIm4iLCJib3VuZGluZ0JveCIsImdldEJvdW5kaW5nQm94IiwiaW50ZXJzZWN0cyIsImRlc3Ryb3lUbnQiLCJUbnQiLCJfcG9zIiwiZ2V0UG9zaXRpb24iLCJjb250YWlucyIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwibSIsIml0ZW1zIiwiQWRkUHJvcCIsIkFkZFNjb3JlIiwiUmVtb3ZlSXRlbSIsImxheW91dCIsImlzTmFOIiwic2hvd01lc3RlcnkiLCJhZGRBbmltIiwic2hvd011c2ljIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZXh0cmFSZWRQYWNrIiwibWVzdGVyeSIsInN0b3BBbGxBY3Rpb25zIiwib3BhY2l0eSIsImFkZCIsIlNob3dNYXNrIiwic2hvd0Jhbm5lciIsIkZhaWwiLCJTdWNjZXNzIiwibGV2ZWxfbnVtIiwibGV2ZWxfcmVzdWx0IiwibGJsIiwic3RhdHVzIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9hZCIsIm5lZWRfYWQiLCJhd3JhZCIsImV2ZXJfcGFzcyIsImV4dGF0QXdhcmQiLCJEYXRlIiwiZ2V0VGltZSIsImNyZWF0ZVNpZ25EYXRhIiwic2NhbGUiLCJSZWxvYWQiLCJsb2FkU2NlbmUiLCJOZXh0IiwidXNlckluZm8iLCJwb3dlciIsIkV4aXRHYW1lIiwiQXdhcmRWaWRlbyIsInBhY2siLCJ2aWRlb0FkIiwic2VlVmlkZW9Bd2FyZCIsImVudGVyR2FtZSIsInRhcmdldCIsImNsb3NlTGF5ZXIiLCJwYXVzZWQiLCJzIiwidXBkYXRlIiwiZHQiLCJ1c2VQcm9wIiwic2hvd1NoYWtlIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwiX25vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJzaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwiQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsQ0FETjtBQUVIQyxNQUFBQSxXQUFXLEVBQUU7QUFGVixLQUZDO0FBTVI7QUFDQUMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsQ0FEQTtBQUVURCxNQUFBQSxXQUFXLEVBQUU7QUFGSixLQVBMO0FBV1I7QUFDQUUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsRUFERjtBQUVQRixNQUFBQSxXQUFXLEVBQUU7QUFGTixL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LEVBQVMsQ0FBVCxDQUE1QixDQUFWLENBWjJELENBYTNEOzs7QUFDQSxjQUFJRixJQUFJLEdBQUd2SyxFQUFFLENBQUNpSyxXQUFILENBQWUsS0FBS2hKLElBQXBCLENBQVg7QUFDQXNKLFVBQUFBLElBQUksQ0FBQ2hCLElBQUwsR0FBWSxNQUFaO0FBQ0EsZUFBS0QsSUFBTCxDQUFVa0IsUUFBVixDQUFtQkQsSUFBbkI7QUFDQSxjQUFJbUksSUFBSSxHQUFHMVMsRUFBRSxDQUFDMlMsSUFBSCxDQUFRQyxjQUFSLEVBQVg7QUFDQXJJLFVBQUFBLElBQUksQ0FBQ0QsV0FBTCxDQUFpQnRLLEVBQUUsQ0FBQ3lLLEVBQUgsQ0FBTVcsR0FBRyxDQUFDVixDQUFKLEdBQVFnSSxJQUFJLENBQUN6SCxLQUFMLEdBQWEsQ0FBM0IsRUFBOEJHLEdBQUcsQ0FBQ1QsQ0FBSixHQUFRK0gsSUFBSSxDQUFDdE8sTUFBTCxHQUFjLENBQXBELENBQWpCO0FBQ0FtRyxVQUFBQSxJQUFJLENBQUN4SSxNQUFMLEdBQWMsSUFBZDtBQUNBd0ksVUFBQUEsSUFBSSxDQUFDOUYsWUFBTCxDQUFrQnpFLEVBQUUsQ0FBQzZTLFNBQXJCLEVBQWdDdkQsSUFBaEMsQ0FBcUMsTUFBckM7O0FBRUFrRCxVQUFBQSxLQUFLLENBQUM5RCxPQUFOOztBQUNBOEQsVUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQSxlQUFLcFMsS0FBTCxHQUFhLEVBQWI7QUFDQSxjQUFJMkMsT0FBTyxHQUFHO0FBQ1ZDLFlBQUFBLElBQUksRUFBRTtBQURJLFdBQWQ7QUFHQWhELFVBQUFBLEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU0MsV0FBVCxDQUFxQixvQkFBckIsRUFBMkMsTUFBM0MsRUFBbURHLE9BQW5EO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSTtBQXBDUjtBQXNDSDtBQXRxQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lvJXlhaUg5b6X5YiG562J6YWN572uIOWkqumVvyDmiYDku6XmjaLkuKrmlofku7blhplcbmltcG9ydCBJdGVtQXR0ciBmcm9tICcuL0NvbmZpZyc7XG5pbXBvcnQgTGV2ZWwgZnJvbSAnLi9MZXZlbCc7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvL+mSqeWtkOmAn+W6plxuICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q6YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICAvL+mSqeWtkOaXi+i9rOmAn+W6plxuICAgICAgICByb3RhdGVTcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q5peL6L2s6YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICAvL+mSqeWtkOiMg+WbtFxuICAgICAgICBIb29rUmFuZ2U6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDcwLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDml4vovazop5LluqbojIPlm7QnXG4gICAgICAgIH0sXG4gICAgICAgIC8v5omA5pyJ55qEcHJlZmFiIOi/meenjeaWueW8j+aYr+WQjOatpeeahCDku6PnoIHmr5TovoPlpb3lhpkg5bCx5piv6Zq+5ouWXG4gICAgICAgIFByZWZhYnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIEluaXRUaW1lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDop6bnorDliLDnianlk4HnmoTlo7Dpn7NcbiAgICAgICAgQ29sbGlzaW9uQXVkaW86IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5Yqg5YiG55qE5aOw6Z+zXG4gICAgICAgIEFkZFNjcm9lQXVkaW86IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOmBk+WFt+eahOe6ueeQhlxuICAgICAgICBQcm9wU3ByaXRlRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBCb29tOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBIb29rRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBIZXJvRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBMb3R0ZXJ5RnJhbXNlOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICog5Yid5aeL5YyWXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICAvL+WKoOi9vemmlumhtei1hOa6kFxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgfSxcbiAgICBzZXRHdWlkZSgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ndWlkZUluZGV4O1xuICAgICAgICBpZiAoaW5kZXggPD0gMykge1xuICAgICAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJylcbiAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfXCIgKyBpbmRleCkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBuZXh0R3VpZGUoZSwgbXNnKSB7XG4gICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpO1xuICAgICAgICBsZXQgZ3VpZGVfMSA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMVwiKTtcbiAgICAgICAgbGV0IGd1aWRlXzIgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzJcIik7XG4gICAgICAgIGxldCBndWlkZV8zID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8zXCIpO1xuICAgICAgICBndWlkZV8xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZV8yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZV8zLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAobXNnID09PSBcIjJcIikge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMik7XG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT09IFwiM1wiKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCAzKTtcbiAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfM1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZyA9PT0gXCI0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCA0KTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoaWRlTmVlZExheWVyKCkge1xuICAgICAgICAvLyDlpoLmnpzlvIDlp4vmuLjmiI8g6YKj5LmI5Yi35paw5LiA5LiL6YGT5YW35pWw5o2uXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICBwcm9wOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjkvZPlipvmiJDlip9cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvLyDlhbPpl63nlYzpnaLlvIDlp4vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g54K55Ye75byA5aeL5ri45oiP5LmL5YmNIOmHjeaWsOWQjOatpeS4gOS4i+mBk+WFt+S/oeaBr1xuICAgICAgICAgICAgIC8vIOmakOiXj2Jhbm5lclxuICAgICAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYW9qdSgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgICAgICAvLyDlr7nlhbPljaHov5vooYzmiZPngrlcbiAgICAgICAgICAgIGlmKGNjLnptLkxldmVsSW5mby5zdGFnZTw9NSl7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwic3RhcnRfXCIrY2Muem0uTGV2ZWxJbmZvLnN0YWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhpZGVMb3R0ZXJ5TGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuTG90dGVyeUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd0JhY2tMYXllcigpIHtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIneWni+WMliDlkITnp43pnIDopoHnmoTmr5Tlj5jph49cbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICAvL+mSqeWtkOefv+W3pVxuICAgICAgICB0aGlzLk1pbmVyID0gY2MuZmluZCgnQ2FudmFzL0hlYWRlci9NaW5lcicpO1xuICAgICAgICAvL+efv+W3peWKqOeUuyBcbiAgICAgICAgLy/ojrflj5bpkqnlrZBcbiAgICAgICAgdGhpcy5Ib29rID0gY2MuZmluZCgnQ2FudmFzL0hlYWRlci9NaW5lci9Ib29rJyk7XG4gICAgICAgIC8v6I635Y+W6ZKp5a2Q5Yid5aeL6ZW/5bqmXG4gICAgICAgIHRoaXMuSG9va0hlaWdodCA9IHRoaXMuSG9vay5oZWlnaHQ7XG4gICAgICAgIC8v5pS+5LiL6ZKp5a2Q5byA5YWzIDAg5YGc5q2iIDEg5Y+R5bCEIDLmi4nlm55cbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLmN1clNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgLy8g5Yid5aeL5YyW55+/5bel55qE57K+54G15binXG4gICAgICAgIHRoaXMuTWluZXJTcCA9IHRoaXMuTWluZXIuZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIik7XG4gICAgICAgIC8vIOeci+inhumikeW+l+S9k+WKm+eVjOmdolxuICAgICAgICB0aGlzLnNlZVZpZGVvTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2VlVmlkZW9sYXllcicpXG4gICAgICAgIC8v5b6X5YiG57Sv6K6hXG4gICAgICAgIHRoaXMuU2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvU2NvcmUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+mAmuWFs+ebruagh+WIhuaVsFxuICAgICAgICB0aGlzLlRhcmdldFNjb3JlID0gY2MuZmluZCgnQ2FudmFzL1Njb3JlQW5kVGFyZ2V0L1RhcmdldCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v5YCS6K6h5pe2XG4gICAgICAgIHRoaXMuVGltZSA9IGNjLmZpbmQoJ0NhbnZhcy9DaGVja3BvaW50QW5kVGltZS9UaW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lhbPljaHmlbBcbiAgICAgICAgdGhpcy5DaGVja3BvaW50ID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL0NoZWNrcG9pbnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLk5lZWRMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9OZWVkTGF5ZXInKTtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvQmFja0xheWVyJyk7XG4gICAgICAgIHRoaXMuUHJvcE5vZGUgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL1Byb3AnKTtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIkxvdHRlcnlMYXllclwiKTtcbiAgICAgICAgLy/nianlk4HljLrln59cbiAgICAgICAgdGhpcy5pdGVtQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9JdGVtQXJlYScpO1xuICAgICAgICAvL+W8gOWQr+eisOaSnlxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMubWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5tYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xuXG4gICAgICAgIC8v6YeN57uEcHJlZmFi5pWw57uEIOaWueS+v+afpeivolxuICAgICAgICB0aGlzLlByZWZhYiA9IHt9O1xuICAgICAgICB0aGlzLlByZWZhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuUHJlZmFiW2l0ZW0uX25hbWVdID0gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/lj5HlsITpkqnlrZDmjInpkq5cbiAgICAgICAgbGV0IGVtaXRIb29rID0gY2MuZmluZCgnQ2FudmFzL2VtaXRIb29rQnRuJyk7XG4gICAgICAgIC8v5by55Ye65qGGXG4gICAgICAgIHRoaXMuTWFzayA9IGNjLmZpbmQoJ0NhbnZhcy9NYXNrJyk7XG4gICAgICAgIC8v5ri45oiP57uT5p2f5oyJ6ZKuIOWMheaLrOi/h+WFsy/nu5PmnZ/muLjmiI9cbiAgICAgICAgdGhpcy5NYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5DbG9zZU1hc2suYmluZCh0aGlzKSk7XG4gICAgICAgIGVtaXRIb29rLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5lbWl0SG9va0J0bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gLTE7XG4gICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgY2MuVG9vbHMuc2NyZWVuQWRhcHRlcigpO1xuICAgICAgICB0aGlzLlJlc2V0SW5mbygpO1xuICAgICAgICB0aGlzLlN0YXJ0VGltZSgpO1xuICAgICAgICB0aGlzLlNldExldmVsKCk7XG4gICAgICAgIHRoaXMuQ3JlYXRlVGFyZ2V0U2NvcmUoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVJdGVtKCk7XG4gICAgICAgIHRoaXMucmVkUGFjayA9IHRoaXMubGV2ZWxJbmZvLnJlZFBhY2s7XG4gICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrID0gMDtcbiAgICAgICAgLy8g5piv5ZCm5paw5omL5byV5a+8XG4gICAgICAgIHRoaXMuZ3VpZGVJbmRleCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKTtcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGVJbmRleCA8IDQgJiYgdGhpcy5ndWlkZUluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5pyJ5paw5omL5byV5a+85pqC5YGc5ri45oiPXG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRHdWlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLk5lZWRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5lZWRTY29yZSA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwibmVlZFNjb3JlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsZXQgbmVlZExldmVsID0gdGhpcy5OZWVkTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZWVkTGV2ZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5lZWRTY29yZS5zdHJpbmcgPSBg6KaB5rGC5YiG5pWw77yaJHt0aGlzLmxldmVsSW5mby5zY29yZX1gXG4gICAgICAgICAgICBuZWVkTGV2ZWwuc3RyaW5nID0gYOesrCR7dGhpcy5sZXZlbEluZm8uaWR95YWzYDtcbiAgICAgICAgICAgIC8vIOaKveWllumAieWFs+WNoVxuICAgICAgICAgICAgLy8g5YmN56uv6ZqP5py65LiA5Liq6YGT5YW3XG4gICAgICAgICAgICAvLyDngrjlvLnvvJoxMCAxMeaXtumSnyAxM+iNr+awtFxuICAgICAgICAgICAgbGV0IGFyciA9IFsxMCwgMTEsIDEzXTtcbiAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgbGV0IHByb3AgPSBhcnJbcmRtXTtcbiAgICAgICAgICAgIHRoaXMuTG90dGVyeVByb3AgPSBwcm9wO1xuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLkxvdHRlcnlMYXllci5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzJdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVswXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAxMykge1xuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgTG9va1ZpZGVvR2V0QXdhcmQoKSB7XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZCxcbiAgICAgICAgICAgIFwid2VhcG9uXCI6IHRoaXMuTG90dGVyeVByb3BcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTG90dGVyeTJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICB0aGlzLkxvdHRlcnlBd2FyZCA9IHJlcy5kYXRhLmF3YXJkO1xuICAgICAgICAgICAgdGhpcy5oaWRlTG90dGVyeUxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5L2/55So6YGT5YW3XG4gICAgaGFuZGxlRGFvanUoKSB7XG4gICAgICAgIC8vIOmBk+WFt+eahOaVsOmHj+S4ulxuICAgICAgICBsZXQgd2VhcG9uID0gY2Muem0uTGV2ZWxJbmZvLndlYXBvbjtcbiAgICAgICAgLy8gcHJvcOexu+WeiyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAxMy7oja/msLQgMTQu5LiJ5Y+26I2JXG4gICAgICAgIC8vIOWkhOeQhumBk+WFtyDpgZPlhbfliIbliKvkuLog54K45by5IGJvb21OdW1iZXIg5pe26ZKfIGNsb2NrTnVtYmVyIOefs+WMluaJi+WGjCBoYW5kYm9va051bWJlciDoja/msLQgbGlxdWlkTnVtYmVyIOS4ieWPtuiNiSBjbG92ZXJOdW1iZXJcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIjFcIjogXCLkvZPliptcIixcbiAgICAgICAgICAgIFwiMTBcIjogXCLngrjlvLlcIixcbiAgICAgICAgICAgIFwiMTFcIjogXCLml7bpkp9cIixcbiAgICAgICAgICAgIFwiMTJcIjogXCLnn7PljJbmiYvlhoxcIixcbiAgICAgICAgICAgIFwiMTNcIjogXCLoja/msLRcIixcbiAgICAgICAgICAgIFwiMTRcIjogXCLkuInlj7bojYlcIlxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhcG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv54K45by5XG4gICAgICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gd2VhcG9uW2ldLm51bSAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+WFtuS7lueJqeWTgemCo+S5iOebtOaOpeS9v+eUqFxuICAgICAgICAgICAgICAgIGlmICh3ZWFwb25baV0ubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpeS9v+eUqFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IHdlYXBvbltpXS5wcm9wXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjmiJDlip8tXCIsIGRhdGFbd2VhcG9uW2ldLnByb3BdKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9ja051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRib29rTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdmVyTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDpkqnlrZDml4vovaxcbiAgICAgKi9cbiAgICBIb29rUm9UYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5Ib29rU3RhdGUpIHJldHVybjtcblxuICAgICAgICAvL+mZkOWItuiMg+WbtCDlj6rog73lnKggNzAg5LiOIC03MCDkuYvpl7RcbiAgICAgICAgaWYgKHRoaXMuSG9vay5hbmdsZSA+PSA3MCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IC10aGlzLnJvdGF0ZVNwZWVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuSG9vay5hbmdsZSA8PSAtNzApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSBNYXRoLmFicyh0aGlzLnJvdGF0ZVNwZWVkKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLkhvb2suYW5nbGUgKz0gdGhpcy5yb3RhdGVTcGVlZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWPkeWwhOmSqeWtkOaMiemSruS6i+S7tlxuICAgICAqL1xuICAgIGVtaXRIb29rQnRuKCkge1xuICAgICAgICAvL1RPRE8g5YGc5q2i6ZKp5a2Q5peL6L2sXG4gICAgICAgIC8v5omT5byAL+WFs+mXrSDpkqnlrZDlvIDlhbMg5rKh5pyJ5ouJ5Zue5LmL5YmNIOW9k+WJjXBvc2l0aW9uIO+8gT0g5Yid5aeL5L2N572u5pe2IOS4jeWFgeiuuOaTjeS9nFxuICAgICAgICBpZiAodGhpcy5Ib29rU3RhdGUpIHJldHVybjtcbiAgICAgICAgLy8g5b2T5YmN5Y+R5bCE57uz5a2QXG4gICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJmYW5nXCIsIHRydWUpO1xuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlj5HlsITpkqnlrZBcbiAgICAgKi9cbiAgICBlbWl0SG9vaygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLkhvb2tTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuSG9vay5oZWlnaHQgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmhlaWdodCA8PSB0aGlzLkhvb2tIZWlnaHQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL+ajgOa1i+aYr+WQpuaLieWbnueJqeWTgVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhhbmRsZSh0aGlzLkhvb2suY2hpbGRyZW5bMF0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+5ouJ5Zue5Yqo55S7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLnNldEFuaW1hdGlvbigwLCBcImlkbGUzXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1pbmVyU3AuYWRkQW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdG9wSG9va01vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaLieWbnumSqeWtkFxuICAgICAqL1xuICAgIFB1bGxCYWNrSG9vaygpIHtcbiAgICAgICAgLy/mkq3mlL7mi4nlm57pkqnlrZDliqjnlLtcbiAgICAgICAgLy8g5bCG6ZKp5a2Q55qE5Zu+54mH6L2s5YyWXG4gICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJsYVwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pkqnlrZDmi4nlm57nmoTpgJ/luqZcbiAgICAgKi9cbiAgICBTZXRTcGVlZChvdGhlcikge1xuICAgICAgICAvLyDmmK/lkKbmnInoja/msLTmlYjmnpwg5aaC5p6c5pyJ6YKj5LmIc3BlZWTpgJ/luqblop7liqAxMCVcbiAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICBJdGVtQXR0cltvdGhlci5ub2RlLm5hbWVdID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSB8fCB7fTtcbiAgICAgICAgaWYgKHRoaXMubGlxdWlkTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiNr+awtOaViOaenOmAn+W6puWinuWKoDEwJVwiKVxuICAgICAgICAgICAgcHJvbW90ZSA9IDEuMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BlZWQgPSBJdGVtQXR0cltvdGhlci5ub2RlLm5hbWVdLnNwZWVkICogcHJvbW90ZSB8fCAxMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YeN572u5omA5pyJ5YiG5pWw5L+h5oGvXG4gICAgICovXG4gICAgUmVzZXRJbmZvKCkge1xuICAgICAgICAvL3RoaXMudmljdG9yeSDmuLjmiI/og5zliKnlpLHotKXnirbmgIEgMCA9IOa4uOaIj+S4rSAxID0g5oiQ5YqfIDIgPSDlpLHotKVcbiAgICAgICAgdGhpcy52aWN0b3J5ID1cbiAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuVGltZS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRhcmdldFNjb3JlLnN0cmluZyA9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWQr+WKqOWAkuiuoeaXtlxuICAgICAqL1xuICAgIFN0YXJ0VGltZSgpIHtcbiAgICAgICAgLy8g5piv5ZCm5a2Y5Zyo5pe26ZKfIOWtmOWcqOaXtumSnyB0aGlzLkluaXRUaW1lKzEw56eSXG4gICAgICAgIGlmICh0aGlzLmNsb2NrTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9v+eUqOaXtumSn+aIkOWKnysxMHNcIilcbiAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5Jbml0VGltZSArPSAxMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgdGhpcy50aW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMuVGltZS5zdHJpbmcgPSB0aGlzLkluaXRUaW1lO1xuICAgICAgICAgICAgaWYgKHRoaXMuSW5pdFRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aW1lciwgMSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5YWz5Y2h5pWwXG4gICAgICovXG4gICAgU2V0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxJbmZvID0gTGV2ZWxbXCJsZXZlbFwiICsgY2Muem0uTGV2ZWxJbmZvLnN0YWdlXVxuICAgICAgICAvLyB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWwxNVwiXVxuICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IGNjLnptLkxldmVsSW5mby5jdXJyZW50X3Njb3JlO1xuICAgICAgICB0aGlzLkNoZWNrcG9pbnQuc3RyaW5nID0gYCR7Y2Muem0uTGV2ZWxJbmZvLnN0YWdlfWA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOehruWumui/h+WFs+ebruagh+WIhuaVsFxuICAgICAqIOebruagh+WIhuaVsOagueaNruWFs+WNoeWFs+aVsOehruWumiDpmr7luqbntK/liqDnjofkuLpcbiAgICAgKiAg5Z+65pWwIDEwMDBcbiAgICAgKiAg5q+P5YWz6YCS5aKeNTAw5YiGXG4gICAgICogXG4gICAgICog5pyA5aSnIDUwMDDliIZcbiAgICAgKi9cbiAgICBDcmVhdGVUYXJnZXRTY29yZSgpIHtcbiAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSB0aGlzLmxldmVsSW5mby5zY29yZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ54mp5ZOBIOmcgOimgeagueaNruebruagh+WIhuadpeeUn+aIkCDnlJ/miJDnmoTmiYDmnInnianlk4HmgLvliIblv4Xpobvmr5Tnm67moIfov4flhbPliIbmlbDpq5gyMCVcbiAgICAgKiDnlJ/miJDnmoTnianlk4HmlbDph4/lnKggMTAtMzBcbiAgICAgKi9cbiAgICBDcmVhdGVJdGVtKCkge1xuICAgICAgICBsZXQgbmV3SXRlbUFyciA9IHRoaXMubmV3Q3JlYXRlQ2FsYygpO1xuICAgICAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5qC55o2u5YiG5pWw5YWI5bCGYXJyIOaOkuW6jyDmgLvliIbkuI3og73otoXov4fmnIDlpKfliIbmlbAg5aaC5p6c6LaF5LqGIOWImeS7juWwj+W8gOWni+WHj+WwkSDnm7TliLDliIbmlbDlsI/kuo7mnIDlpKfliIbmlbBcbiAgICAgICAgLy/nlJ/miJDnm7jlupTnmoRQcmZhYlxuICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1BcnI9XCIsIG5ld0l0ZW1BcnIpO1xuICAgICAgICBuZXdJdGVtQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW2l0ZW0ubmFtZV0pO1xuICAgICAgICAgICAgbGV0IFhZID0gdGhpcy5yYW5kb21YWShub2RlKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgIGlmIChpdGVtLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IGl0ZW0uc2NvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5wcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5leHRyYSA9IGl0ZW0ucHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oWFkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJUbnRcIikge1xuICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJ0bnRCb29tXCI7XG4gICAgICAgICAgICAgICAgYm9vbS5zZXRQb3NpdGlvbihjYy52MihYWS54LCBYWS55IC0gMjE4KSk7XG4gICAgICAgICAgICAgICAgbm9kZS5ib29tID0gYm9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRvZG/lhYjkuI3liJvlu7rogIHpvKDor5Xor5VcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLm1vdXNlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGV2ZWxJbmZvLm1vdXNlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIOaZrumAmuiAgem8oFxuICAgICAgICAgICAgbGV0IG1vdXNlTnVtYmVyID0gTnVtYmVyKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKG1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiTW91c2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgRHJpbGxNb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzFdKTtcbiAgICAgICAgICAgIGlmIChEcmlsbE1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRHJpbGxNb3VzZU51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5QcmVmYWJbXCJEcmlsbE1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNzAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU1vdXNlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g55Sf5oiQ55qE54mp5ZOB5piv5Y+v5Yqo55qEXG4gICAgbW92ZU1vdXNlKG1vdXNlKSB7XG4gICAgICAgIC8vIOWFiOWwhuiAgem8oOenu+WKqOWIsOacgOWPs+i+uSDml7bpl7TkuLo2MDAv6Led56a7KjVcbiAgICAgICAgbGV0IF9tb3ZlVGltZSA9IDEwXG4gICAgICAgIGxldCB0aW1lID0gKHBhcnNlSW50KDMwMCAtIG1vdXNlLngpIC8gNjAwKSAqIF9tb3ZlVGltZVxuICAgICAgICBjYy50d2Vlbihtb3VzZSkudG8odGltZSwgeyB4OiAzMDAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyDnjrDlnKjlvIDlp4sg6ICB6byg5YGa6KeE5b6L6L+Q5Yqo5YWI5bCG6ICB6byg5Y+N6L2sXG4gICAgICAgICAgICBpZiAobW91c2UubmFtZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG1vdXNlKS5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkudG8oX21vdmVUaW1lLCB7IHg6IC0zMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgfSkudG8oX21vdmVUaW1lLCB7IHg6IDMwMCB9KS5kZWxheSgxKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Uuc2NhbGVYID0gLTE7XG4gICAgICAgICAgICAgICAgfSkpLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZSArIDEpXG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5XjgILjgILkuIDlj6rmnInkuIDkuKrmgLvmlbDph48g5Y+v5Lul5b6X5YiwIOWQhOS4queJqeWTgeeahOaVsOmHj1xuICAgIG5ld0NyZWF0ZUNhbGMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVJdGVtQXJyID0gW107XG4gICAgICAgIC8vIOWFiOeUn+aIkOe6ouWMhei3n+elnuenmOeJqeWTgVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uZXh0cmEpIHtcbiAgICAgICAgICAgIGxldCBleHRyYSA9IHRoaXMubGV2ZWxJbmZvLmV4dHJhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIDDmmK/nuqLljIUg5Yib5bu65LiA5Liq57qi5YyFXG4gICAgICAgICAgICBpZiAoZXh0cmFbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLl9hcnJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0cmFbMV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBfcHJvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56We56eY54mp5ZOBIOWFiOmaj+acuuWHuueJqeWTgSDmmK/lkKbmnInkuInlj7bojYkg5aaC5p6c5pyJIOiNr+awtOeahOmaj+acuuamgueOh+WinuWKoFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsb3Zlck51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi54K45by5XCIsIFwiM+WFg+e6ouWMhVwiLCBcIjXlhYPnuqLljIVcIiwgXCLoja/msLRcIiwgXCLoja/msLRcIl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBybWQgPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDQpO1xuICAgICAgICAgICAgICAgICAgICBfcHJvcCA9IGFycltybWRdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNeXN0ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIOW8gOWHuueahOe6ouWMhemHkeminVxuICAgICAgICAgICAgICAgICAgICBcInByb3BcIjogX3Byb3AsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5ib29tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxJbmZvLmJvb207IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNruenr+WIhiDnlJ/miJDlr7nlupTkuKrmlbBcbiAgICAgICAgaWYgKCF0aGlzLmxldmVsSW5mby5nb29kKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5mbyA9IHRoaXMubGV2ZWxJbmZvLmdvb2Quc3BsaXQoXCIsXCIpO1xuICAgICAgICAvLyBsZXQgbWF4U2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IHNjb3JlQXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9pbmZvID0gaW5mb1tpXS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IF9pbmZvWzBdO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBOdW1iZXIoX2luZm9bMV0pXG4gICAgICAgICAgICBsZXQgbmV3QXJyID0gdGhpcy5jcmVhdGVCeVR5cGUodHlwZSwgcGVyY2VudCk7XG4gICAgICAgICAgICBzY29yZUFyciA9IFsuLi5zY29yZUFyciwgLi4ubmV3QXJyXVxuICAgICAgICB9XG4gICAgICAgIC8vIOWwhuenr+WIhuaVsOe7hOaOkuW6j1xuICAgICAgICBsZXQgX3Njb3JlQXJyID0gc2NvcmVBcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPiBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5zY29yZSA8IGIuc2NvcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgLy8g6K6h566X5omA5pyJYXJy5Lit55qE5YiG5pWw5piv5LiN5piv6LaF6L+HIOacrOWFs+eahOacgOWkp+WAvCDlpoLmnpzotoXov4fpgqPkuYjku47lkI7lvoDliY3orqHnrpflgLxcbiAgICAgICAgbGV0IG5ld0FyciA9IFtdO1xuICAgICAgICBsZXQgdG90YWxTY29yZSA9IHRoaXMubGV2ZWxJbmZvLm1heFNjb3JlO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2NvcmVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9zY29yZSArPSBfc2NvcmVBcnJbaV0uc2NvcmU7XG4gICAgICAgICAgICBpZiAoX3Njb3JlIDw9IHRvdGFsU2NvcmUpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChfc2NvcmVBcnJbaV0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4ubmV3QXJyXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVJdGVtQXJy5pyq5oyJ54Wn5a695bqm5o6S5bqPPVwiLCBjcmVhdGVJdGVtQXJyKTtcbiAgICAgICAgLy8g5bCGY3JlYXRlSXRlbUFycuaOkuW6j+aMieeFp+WuveW6plxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gY3JlYXRlSXRlbUFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA+IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZUl0ZW1BcnLnhaflrr3luqbmjpLluo89XCIsIGNyZWF0ZUl0ZW1BcnIpO1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICB9LFxuICAgIC8vIOagueaNruenr+WIhui3n+exu+Wei+eUn+aIkOaVsOmHj25hbWVcbiAgICBjcmVhdGVCeVR5cGUodHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+efs+WdlyDmmK/lkKbmnInljJbnn7PmiYvlhowg5aaC5p6c5pyJIOefs+WktOeahOS7t+WAvOaPkOWNhzIwJSB0b2RvXG4gICAgICAgICAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhbmRib29rTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55+z5YyW5omL5YaM5L2/55So5oiQ5Yqf55+z5aS055qE5Lu35YC85o+Q5Y2HMjAlXCIpXG4gICAgICAgICAgICAgICAgICAgIHByb21vdGUgPSAxLjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJTdG9uZS1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbMjAsIDMwLCA0MF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aENpZyA9IFs0MiwgODksIDE1NF07XG4gICAgICAgICAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWdbcmRtXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUgKyByZG0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHNjb3JlQ2lnW3JkbV0gKiBwcm9tb3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aENpZ1tyZG1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ1wiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+m7hOmHkVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiR29sZC1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN56ev5YiG55qE5pyA5aSn5YC85Yqo5oCB55Sf5oiQ5pWw57uEXG4gICAgICAgICAgICAgICAgICAgIGxldCBfX3Njb3JlID0gc2NvcmUgLSBfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX3Njb3JlID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSBbNTAsIDEwMCwgMTUwLCAyMDAsIDMwMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2tleSA9IE1hdGguZmxvb3IoX19zY29yZSAvIDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IF9rZXkgPiA0ID8gNCA6IF9rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5OyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZy5wdXNoKDUwICogKDEgKyBrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI1MFwiOiAzNixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwXCI6IDYyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxNTBcIjogODMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjIwMFwiOiAxMDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjMwMFwiOiAxNDZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCBzY29yZUNpZy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlQ2lnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aFtcIlwiICsgc2NvcmVDaWdbcmRtXV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv6ZK755+zXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJEcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiTXlzdGVyeVwiXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZUNpZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSAtIF9zY29yZSA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSB0aGlzLmNyZWF0ZVJhbmRtKDMwLCAyMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlIC0gX3Njb3JlID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgc2NvcmUgLSBfc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IHNjb3JlQ2lnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmaj+acuuWdkOaghyDliKTmlq3ov5nkuKrlnZDmoIfkuqfnlJ/nmoRyZWN05piv5ZCm6Lef5YW25LuW55qE5omA5pyJ55qE54mp5ZOB55qEcmVjdOebuOaOpeinpiDlpoLmnpzmsqHmnInov5Tlm57lnZDmoIcg5aaC5p6c5o6l6Kem6YeN5paw6ZqP5py6XG4gICAgICovXG4gICAgcmFuZG9tWFkoaXRlbSkge1xuICAgICAgICAvL3ggPSDlsY/luZXlrr3luqYgLyAyICog6ZqP5py65pWwXG4gICAgICAgIC8veSA9IOWcsOW5s+mdouS9jee9riArIOmaj+acuuaVsGNjLnJhbmRvbTBUbzEoKSAr6auY5bqm6IyD5Zu077yI5Y+v5Lul6K+05pivWeeahOacgOWwj+eCue+8iVxuICAgICAgICAvL+WcsOW5s+mdouS9jee9riA9IOWcsOmdonkgKyDlnLDpnaIg6auY5bqmIC8gMlxuICAgICAgICAvLyAtIDMw5piv5Zug5Li654mp5ZOB6ZSa54K55Zyo5Lit6Ze05L2N572uIOiuvue9ruWdkOagh+WIsOiMg+WbtOWumueCueeahOaXtuWAmSDkvJrmnInpg6jliIbotoXlh7pcbiAgICAgICAgbGV0IGdyb3VuZFkgPSB0aGlzLml0ZW1BcmVhLnkgKyB0aGlzLml0ZW1BcmVhLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgLy8g6ZqP5py655Sf5oiQ55qE5LiA5Liq5Z2Q5qCHXG4gICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KHBvcy54IC0gaXRlbS53aWR0aCAvIDIsIHBvcy55IC0gaXRlbS5oZWlnaHQgLyAyLCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBsZXQgaXNQZW5nID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbGV0IGJvdW5kaW5nQm94ID0gbi5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgIGlmIChib3VuZGluZ0JveC5pbnRlcnNlY3RzKHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUGVuZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1BlbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21YWShpdGVtKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeCuOW8ueiMg+WbtOeahOeJqeWTgei/m+ihjOmUgOavgVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gVG50XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZGVzdHJveVRudChUbnQpIHtcbiAgICAgICAgLy8g6YGN5Y6GdGhpcy5pdGVtQXJlYeWGheaJgOacieeahOiKgueCuSDlvZPoioLngrnnmoTkuK3lv4PoioLngrnlnKjngrjlvLnlhoUg5YiZ6ZSA5q+BXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobiAhPT0gVG50KSB7XG4gICAgICAgICAgICAgICAgLy8g6YCa6L+HVG5055qE5Lit5b+D5L2N572uIOWIm+W7uuS4gOS4qnJlY3TljLrln59cbiAgICAgICAgICAgICAgICBsZXQgX3BvcyA9IFRudC5nZXRQb3NpdGlvbihjYy52MigpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KF9wb3MueCAtIDEyNSwgX3Bvcy55IC0gMTI1LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IG4uZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMocG9zKSkge1xuICAgICAgICAgICAgICAgICAgICBuLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog55Sf5oiQbi1t6ZqP5py65pWwXG4gICAgICovXG4gICAgY3JlYXRlUmFuZG0obiwgbSkge1xuICAgICAgICBtICs9IDE7XG4gICAgICAgIGxldCBhID0gbSAtIG47XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpICogYSArIG47XG4gICAgICAgIHJldHVybiBwYXJzZUludChudW0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5YWz6Zet57uz5a2Q54q25oCBXG4gICAgICovXG4gICAgU3RvcEhvb2tNb3ZlKCkge1xuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuSG9vay5oZWlnaHQgPSB0aGlzLkhvb2tIZWlnaHQ7XG4gICAgICAgIC8v6YeN572u5Y+R5bCE6ZKp5a2Q6YCf5bqmXG4gICAgICAgIHRoaXMuc3BlZWQgPSA2O1xuICAgICAgICB0aGlzLkhvb2suZ2V0Q2hpbGRCeU5hbWUoXCJob29rXzFcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkhvb2tGcmFtZXNbMF1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWkhOeQhuaLieWbnueahOeJqeWTge+8jOWIoOmZpOeJqeWTgeS7peWPiua3u+WKoOW+l+WIhlxuICAgICAqL1xuICAgIEhhbmRsZShpdGVtcykge1xuICAgICAgICB0aGlzLkFkZFByb3AoaXRlbXMpO1xuICAgICAgICB0aGlzLkFkZFNjb3JlKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5SZW1vdmVJdGVtKGl0ZW1zKTtcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm6L+Y5pyJ54mp5ZOB5Zyo5Zyw5Zu+5LiKIOWmguaenOayoeaciemCo+S5iOe7k+eulyDnu5PmnZ9cbiAgICAgICAgaWYgKHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyDlnLDlm77nianlk4HmtojlpLEg57uT566XXG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICB0aGlzLkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIikpIHtcbiAgICAgICAgICAgIGxldCBib29tID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vbVwiKVxuICAgICAgICAgICAgYm9vbS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICBib29tLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGJvb20gPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDosIPmlbTnjrDmnInnmoTngrjlvLnnmoTnjrDlrp7mlYjmnpxcbiAgICBhZGp1c0Jvb21MYXlvdXQoKSB7XG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLlByb3BOb2RlLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpO1xuICAgICAgICBsYXlvdXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYm9vbU51bWJlciA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYm9vbSA9IGxheW91dC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChpIDw9IHRoaXMuYm9vbU51bWJlcikge1xuICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+W+l+mBk+WFt1xuICAgICAqL1xuICAgIEFkZFByb3AoaXRlbXMpIHtcbiAgICAgICAgaWYgKCFpdGVtc1swXSkgcmV0dXJuO1xuICAgICAgICBpZiAoaXRlbXNbMF0ubmFtZSA9PT0gXCJNeXN0ZXJ5XCIpIHtcbiAgICAgICAgICAgIGxldCBwcm9wID0gaXRlbXNbMF0uZXh0cmE7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIueCuOW8uVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIz5YWD57qi5YyFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgKz0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNeWFg+e6ouWMhVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIuiNr+awtFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56ev5YiGXG4gICAgICAgICAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgKyAocHJvcCB8fCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNjb3JlICs9IChwcm9wIHx8IDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQW5pbShcInNjb3JlXCIsIHByb3ApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1zWzBdLm5hbWUgPT09IFwiUmVkXCIpIHtcbiAgICAgICAgICAgIC8vIOmaj+acujMtOOWdl+mSsSAy5L2N5pyJ5pWI5bCP5pWwXG4gICAgICAgICAgICBsZXQgZXh0cmFSZWRQYWNrID0gKE1hdGguZmxvb3IodGhpcy5jcmVhdGVSYW5kbSgzMDAsIDgwMCkpKSAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IGV4dHJhUmVkUGFjaztcbiAgICAgICAgICAgIHRoaXMuYWRkQW5pbShcInJlZFwiLCBleHRyYVJlZFBhY2spO1xuICAgICAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01lc3RlcnkodHlwZSkge1xuICAgICAgICAvLyBbXCLngrjlvLlcIixcIjPlhYPnuqLljIVcIixcIjXlhYPnuqLljIVcIixcIuiNr+awtFwiXVxuICAgICAgICBsZXQgbWVzdGVyeSA9IHRoaXMuUHJvcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJNZXN0ZXJ5XCIpO1xuICAgICAgICBtZXN0ZXJ5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG1lc3RlcnkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLlByb3BTcHJpdGVGcmFtZXNbdHlwZV07XG4gICAgICAgIG1lc3Rlcnkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2MudHdlZW4obWVzdGVyeSkudG8oMiwgeyB5OiBtZXN0ZXJ5LnkgKyAxMDAsIG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBtZXN0ZXJ5Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBtZXN0ZXJ5LnkgLT0gMTAwO1xuICAgICAgICAgICAgbWVzdGVyeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIoOmZpOeJqeWTgVxuICAgICAqL1xuICAgIFJlbW92ZUl0ZW0oaXRlbXMpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXRlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOa3u+WKoOW+l+WIhlxuICAgICAqL1xuICAgIEFkZFNjb3JlKGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbXNbMF0pIHJldHVybjtcbiAgICAgICAgaWYgKCFpdGVtc1swXS5zY29yZSkgcmV0dXJuO1xuICAgICAgICAvLyBsZXQgc2NvcmVDb24gPSBJdGVtQXR0cltpdGVtc1swXS5uYW1lXSB8fCB7fTtcbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgKyAoaXRlbXNbMF0uc2NvcmUgfHwgMCk7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgKz0gKGl0ZW1zWzBdLnNjb3JlIHx8IDApO1xuICAgICAgICAvL+aSreaUvuW+l+WIhumfs+aViFxuICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aKe5Yqg5LiA5Liq5aKe5Yqg56ev5YiG6aOY5ZCRLS0tPlNjb3Jl5L2N572u54K55Yqo55S7XG4gICAgICAgIHRoaXMuYWRkQW5pbShcInNjb3JlXCIsIGl0ZW1zWzBdLnNjb3JlKVxuICAgIH0sXG4gICAgLy8g5YGa5LiA5Liq5aKe5Yqg56ev5YiG54K55Yqo55S7XG4gICAgYWRkQW5pbSh0eXBlLCBzY29yZSkge1xuICAgICAgICBsZXQgYWRkID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwic2NvcmVcIikge1xuICAgICAgICAgICAgYWRkID0gdGhpcy5TY29yZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImFkZFNjb3JlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicmVkXCIpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuU2NvcmUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGRSZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgYWRkLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIgKyBzY29yZTtcbiAgICAgICAgYWRkLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGFkZC5vcGFjaXR5ID0gMDtcbiAgICAgICAgYWRkLnkgPSAtMTMyO1xuICAgICAgICBjYy50d2VlbihhZGQpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkudG8oMSwgeyB5OiA0MiB9KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmL7npLpNYXNrIHZpY3Rvcnk9MCB2aWN0b3J5PTHog5zliKkgdmljdG9yeT0y5aSx6LSlXG4gICAgICovXG4gICAgU2hvd01hc2soKSB7XG4gICAgICAgIC8v5pi+56S65by55Ye65qGGXG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdGhpcy5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKVxuICAgICAgICBsZXQgRmFpbCA9IHRoaXMuTWFzay5nZXRDaGlsZEJ5TmFtZShcIkZhaWxcIik7XG4gICAgICAgIGxldCBTdWNjZXNzID0gdGhpcy5NYXNrLmdldENoaWxkQnlOYW1lKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgRmFpbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYoY2Muem0uTGV2ZWxJbmZvLnN0YWdlPD01KXtcbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImVuZF9cIitjYy56bS5MZXZlbEluZm8uc3RhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSA9PT0gMSkge1xuICAgICAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g6YCa5YWz5oiQ5Yqf5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJ0aHJvdWdoXCIse1xuICAgICAgICAgICAgICAgIGxldmVsX251bTpjYy56bS5MZXZlbEluZm8uc3RhZ2UsXG4gICAgICAgICAgICAgICAgbGV2ZWxfcmVzdWx0Olwi5oiQ5YqfXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDorr7nva7nm67moIflhoXlrrlcbiAgICAgICAgICAgIGxldCBsYmwgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmr4/ml6Xku7vliqHor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW1zW2ldLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pyq6aKG5Y+WXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxibC5zdHJpbmcgPSBg5q+P5pel5Lu75Yqh6L6+5oiQ5p2h5Lu277yM55yL5bm/5ZGKJHtpdGVtLmN1cnJfYWR9Lyske2l0ZW0ubmVlZF9hZH0s6ZyA6KaB6YCa5YWzJHtpdGVtLmN1cnJfcGFzc19zdGFnZX0vKyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V9YFxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreWQhOenjeadoeS7tlxuICAgICAgICAgICAgICAgIC8vIOWFiOWIpOaWreeUqOaIt+WFs+WNoeadoeS7tlxuICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfcGFzc19zdGFnZSA8IGl0ZW0ubmVlZF9wYXNzX3N0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWFs+WNoeetiee6p+Wwj+S6jumcgOimgeWFs+WNoeetiee6p1xuICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOmAmuWFsyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V95YWz5ZCO5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFs+WNoeetiee6p+i+vuaIkCDliKTmlq3nrKzkuozmnaHku7YgXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfc2lnbl9pbiA8IGl0ZW0ubmVlZF9zaWduX2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWujOaIkOS7iuaXpeetvuWIsOWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfYWQgPCBpdGVtLm5lZWRfYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWGjeeciyR7aXRlbS5uZWVkX2FkIC0gaXRlbS5jdXJyX2FkfeS4quinhumikeWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgYXdyYWQgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwiYXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3cmFkLnN0cmluZyA9IGDlpZblirHnuqLljIUrJHt0aGlzLnJlZFBhY2t9YDtcbiAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uZXZlcl9wYXNzKSB7XG4gICAgICAgICAgICAgICAgYXdyYWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRhdEF3YXJkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhQXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dGFyUmVkUGFjaykge1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLnN0cmluZyA9IGArJHt0aGlzLmV4dGFyUmVkUGFja31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5oiQ5Yqf5oiW6ICF5aSx6LSl5Y+R6YCB5pWw5o2uIHJlZF9wYWNrOue6ouWMhSBzY29yZTrliIbmlbAgdHPvvJrml7bpl7TmiLMgc2lnbiBNRDXmlbDmja5cbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiYm9tYlwiOiB0aGlzLmJvb21OdW1iZXIgKyAxLC8v54K45by55Liq5pWwXG4gICAgICAgICAgICAgICAgXCJwb3Rpb25cIjogdGhpcy5saXF1aWROdW1iZXIsLy/oja/msLRcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHRoaXMuY3VyU2NvcmUsLy/liIbmlbBcbiAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuVG9vbHMuY3JlYXRlU2lnbkRhdGEoc2VuZERhdGEpO1xuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Bhc3NcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzc+mAmuWFs+aIkOWKn+i/lOWbnuS/oeaBr1wiLCByZXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpY3RvcnkgPT09IDIpIHtcbiAgICAgICAgICAgIEZhaWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcInRocm91Z2hcIix7XG4gICAgICAgICAgICAgICAgbGV2ZWxfbnVtOmNjLnptLkxldmVsSW5mby5zdGFnZSxcbiAgICAgICAgICAgICAgICBsZXZlbF9yZXN1bHQ6XCLlpLHotKVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIOmAmuWFs+Wksei0peS4jeeUqOWRiuivieacjeWKoeWZqFxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTWFzaykudG8oMC4zLCB7IHNjYWxlOiAxIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmgaLlpI3muLjmiI/vvIzlhbPpl63lvLnlh7rmoYZcbiAgICAgKiDlpoLmnpzmmK/muLjmiI/pgJrlhbPljp/lm6DogIzmiZPlvIDnmoTlvLnlh7rmoYbkuI3kuojnkIbnnaxcbiAgICAgKi9cbiAgICBDbG9zZU1hc2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZpY3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDph43njqnmnKzlhbNcbiAgICAgKi9cbiAgICBSZWxvYWQoKSB7XG4gICAgICAgIC8v5YGc5q2i5YCS6K6h5pe2XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICAvL+mHjei9veWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57un57ut5LiL5LiA5YWzXG4gICAgICovXG4gICAgTmV4dCgpIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMudmljdG9yeSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8v57un57ut5ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5DbG9zZU1hc2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyDov4flhbPmiJDlip/ngrnlh7vov5vlhaXkuIvkuIDlhbPkuYvliY0g5YWI6I635Y+W55So5oi35L+h5oGvIOeci+eUqOaIt+aYr+WQpuacieS9k+WKm1xuICAgICAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS9k+WKm+Wkp+S6jjAg6L+b5YWl5LiL5LiA5YWzXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLkxldmVsSW5mby5zdGFnZSA8IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jjAg5by55Ye655yL6KeG6aKR6I635b6X5L2T5Yqb55qE5o6l5Y+jXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZVZpZGVvTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/pgIDlh7rmuLjmiI9cbiAgICAgICAgICAgICAgICB0aGlzLkV4aXRHYW1lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvLyDnnIvop4bpopHlvpfnuqLljIVcbiAgICBBd2FyZFZpZGVvKGUpIHtcbiAgICAgICAgY2MubG9nKFwi55yL6KeG6aKR5b6X5aWW5YqxXCIpO1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGxldCBwYWNrID0gY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcyA/IDAgOiB0aGlzLnJlZFBhY2s7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwicmVkX3BhY2tcIjogcGFyc2VJbnQoKHBhY2sgKyB0aGlzLmV4dGFyUmVkUGFjaykgKiAxMDApLC8v57qi5YyFXG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgY2Muem0udmlkZW9BZC5yZWRQYWNrID0gc2VuZERhdGE7XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5L2T5YqbXG4gICAgc2VlVmlkZW9Bd2FyZChlKSB7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lID0gdHJ1ZTtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy50aW1lciAmJiB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjbG9zZUxheWVyKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpgIDlh7rmuLjmiI8g6L+U5Zue5LiK5LiA5Liq5Zy65pmvXG4gICAgICovXG4gICAgRXhpdEdhbWUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICB9LFxuICAgIFJlc3VtZUdhbWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2VHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIHRoaXMuTWluZXJTcC5wYXVzZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaaguWBnOW9k+WJjeeVjOmdolxuICAgIFBhdXNlR2FtZUxheWVyKCkge1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IHRydWU7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5NaW5lclNwLnBhdXNlZCA9IHRydWU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDog5zliKnmiJblpLHotKXpg73op4bkuLrmuLjmiI/nu5PmnZ9cbiAgICAgKi9cbiAgICBHYW1lT3ZlcigpIHtcbiAgICAgICAgLy/liKTmlq3nlKjmiLflvpfliIbmmK/lkKbotoXov4fnm67moIfliIZcbiAgICAgICAgbGV0IHMgPSAwO1xuXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgPj0gcGFyc2VJbnQodGhpcy5UYXJnZXRTY29yZS5zdHJpbmcpKSB7XG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5ri45oiP5aSx6LSlXG4gICAgICAgICAgICBzID0gMjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWN0b3J5ID0gcztcbiAgICAgICAgdGhpcy5TaG93TWFzaygpO1xuICAgIH0sXG5cbiAgICAvLyBzdGFydCAoKSB7XG5cbiAgICAvLyB9LFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZUdhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5OZWVkTGF5ZXIuYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5tb3ZlTW91c2UoKTtcbiAgICAgICAgdGhpcy5lbWl0SG9vaygpO1xuICAgICAgICB0aGlzLkhvb2tSb1RhdGUoKTtcbiAgICB9LFxuICAgIC8vIOS9v+eUqOmBk+WFt1xuICAgIHVzZVByb3AoZSwgbXNnKSB7XG4gICAgICAgIC8vIOWmguaenOaYr+eCuOW8uVxuICAgICAgICBzd2l0Y2ggKG1zZykge1xuICAgICAgICAgICAgY2FzZSBcIueCuOW8uVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeeahOeKtuaAgeW/hemhu+aYr+e7s+WtkOWkhOS6juiDveaLieWbnueahOeKtuaAgVxuICAgICAgICAgICAgICAgIC8vIOajgOa1i+aYr+WQpuacieeJqeWTgVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkhvb2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0gJiYgdGhpcy5ib29tTnVtYmVyID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55So54K45by55YOP5pyN5Yqh5Zmo5Y+R6YCB5raI5oGvXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc2IuRGV2aWNlLnZpYnJhdGUoMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDlhYjmj5DliY3liY3nq6/kvb/nlKgg5piv55S76Z2i5ZCM5q2lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlci0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bmi4nljrvnmoTnianlk4HnmoTkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGV0IF9ub2RlID0gdGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBfbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDngrjlvLnmlYjmnpxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJvb20pO1xuICAgICAgICAgICAgICAgICAgICBib29tLm5hbWUgPSBcImJvb21cIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpXG4gICAgICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIocG9zLnggLSBzaXplLndpZHRoIC8gMiwgcG9zLnkgLSBzaXplLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBib29tLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJib29tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgX25vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogMTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------
