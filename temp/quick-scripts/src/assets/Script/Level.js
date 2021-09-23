"use strict";
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
    "maxScore": 1200,
    "totalScore": 2700,
    "good": "b|180,g|960,m|60",
    "extra": "red",
    "redPack": 66.66
  },
  "level3": {
    "id": "三",
    "score": 1560,
    "maxScore": 1000,
    "totalScore": 3700,
    "good": "b|200,g|800",
    "redPack": 20.96
  },
  "level4": {
    "id": "四",
    "score": 2405,
    "maxScore": 1500,
    "totalScore": 5200,
    "good": "b|225,g|1200,m|75",
    "extra": "red",
    "redPack": 14.36
  },
  "level5": {
    "id": "五",
    "score": 3460,
    "maxScore": 1300,
    "totalScore": 6500,
    "good": "b|370,g|370,d|800",
    "boom": 1,
    "redPack": 10.71
  },
  "level6": {
    "id": "六",
    "score": 4725,
    "maxScore": 2000,
    "totalScore": 8500,
    "good": "b|200,d|1200,g|600",
    "redPack": 8.42
  },
  "level7": {
    "id": "七",
    "score": 6200,
    "maxScore": 1500,
    "totalScore": 10000,
    "good": "b|200,g|1000,d|400",
    "extra": "red,mystery",
    "boom": 2,
    "redPack": 6.88
  },
  "level8": {
    "id": "八",
    "score": 7500,
    "maxScore": 2000,
    "totalScore": 12000,
    "good": "b|200,g|1400,m|400",
    "redPack": 5.77
  },
  "level9": {
    "id": "九",
    "score": 9395,
    "maxScore": 2000,
    "totalScore": 14000,
    "good": "b|300,g|1300,d|400",
    "redPack": 4.94
  },
  "level10": {
    "id": "十",
    "score": 10500,
    "maxScore": 2000,
    "totalScore": 16000,
    "good": "b|400,g|1000,d|400,m|200",
    "extra": "red",
    "redPack": 4.30
  },
  "level11": {
    "id": "十一",
    "score": 12000,
    "maxScore": 1500,
    "totalScore": 17500,
    "good": "b|300,s|50,g|750,d|400",
    "extra": "red,mystery",
    "boom": 1,
    "redPack": 3.80
  },
  "level12": {
    "id": "十二",
    "score": 13000,
    "maxScore": 3000,
    "totalScore": 20500,
    "good": "b|450,g|1150,d|1200,m|200",
    "extra": "red",
    "redPack": 3.39
  },
  "level13": {
    "id": "十三",
    "score": 15700,
    "maxScore": 2500,
    "totalScore": 23000,
    "good": "b|375,g|1725,d|400",
    "extra": "red",
    "redPack": 3.05
  },
  "level14": {
    "id": "十四",
    "score": 17500,
    "maxScore": 2000,
    "totalScore": 25000,
    "good": "b|200,s|100,g|900,d|800",
    "boom": 2,
    "redPack": 2.76
  },
  "level15": {
    "id": "十五",
    "score": 18500,
    "maxScore": 5000,
    "totalScore": 30000,
    "good": "b|500,s|205,g|2650,d|1600",
    "extra": "red,mystery",
    "redPack": 2.52
  },
  "level16": {
    "id": "十六",
    "score": 21000,
    "maxScore": 3000,
    "totalScore": 33000,
    "good": "b|300,g|1900,d|800",
    "redPack": 2.32
  },
  "level17": {
    "id": "十七",
    "score": 22500,
    "maxScore": 3500,
    "totalScore": 36500,
    "good": "g|1300,b|175,zs|2100,m|100",
    "redPack": 2.14
  },
  "level18": {
    "id": "十八",
    "score": 24000,
    "maxScore": 10000,
    "totalScore": 46500,
    "good": "g|1900,zs|2100,d|5600,m|100,s|300",
    "extra": "red,mystery",
    "redPack": 1.99
  },
  "level19": {
    "id": "十九",
    "score": 30000,
    "maxScore": 4000,
    "totalScore": 50500,
    "good": "b|100,g|2000,zs|1400,d|400,m|100",
    "redPack": 1.85
  },
  "level20": {
    "id": "二十",
    "score": 33000,
    "maxScore": 4000,
    "totalScore": 54500,
    "good": "b|400,s|400,g|3200",
    "extra": "red",
    "boom": 1,
    "redPack": 1.73
  },
  "level21": {
    "id": "二十一",
    "score": 36500,
    "maxScore": 4000,
    "totalScore": 58500,
    "good": "g|500,zs|3500",
    "boom": 1,
    "redPack": 1.62
  },
  "level22": {
    "id": "二十二",
    "score": 39000,
    "maxScore": 4000,
    "totalScore": 62500,
    "good": "d|4000",
    "extra": "red",
    "boom": 2,
    "redPack": 1.53
  },
  "level23": {
    "id": "二十三",
    "score": 41500,
    "maxScore": 4000,
    "totalScore": 66500,
    "good": "b|400,g|2200,zs|1400",
    "extra": ",mystery",
    "boom": 2,
    "redPack": 1.44
  },
  "level24": {
    "id": "二十四",
    "score": 43500,
    "maxScore": 4000,
    "totalScore": 70500,
    "good": "b|400,g|2200,zs|1400",
    "extra": "red",
    "redPack": 1.36
  },
  "level25": {
    "id": "二十五",
    "score": 46000,
    "maxScore": 4200,
    "totalScore": 74700,
    "good": "zs|4200",
    "boom": 3,
    "redPack": 1.29
  },
  "level26": {
    "id": "二十六",
    "score": 49500,
    "maxScore": 5000,
    "totalScore": 79700,
    "good": "s|800,zs|4200",
    "boom": 1,
    "redPack": 1.22
  },
  "level27": {
    "id": "二十七",
    "score": 52500,
    "maxScore": 5000,
    "totalScore": 84700,
    "good": "b|400,zs|700,d|3600",
    "boom": 1,
    "extra": "red",
    "redPack": 1.17
  },
  "level28": {
    "id": "二十八",
    "score": 55500,
    "maxScore": 5000,
    "totalScore": 89700,
    "good": "b|500,g|2950,m|150,zs|1400",
    "boom": 1,
    "extra": "red",
    "redPack": 1.11
  },
  "level29": {
    "id": "二十九",
    "score": 58000,
    "maxScore": 5000,
    "totalScore": 94700,
    "good": "b|500,g|2950,m|150,zs|1400",
    "extra": "red",
    "boom": 1,
    "redPack": 1.06
  },
  "level30": {
    "id": "三十",
    "score": 62000,
    "maxScore": 5000,
    "totalScore": 99700,
    "good": "b|500,g|2950,s|150,zs|1400",
    "boom": 1,
    "extra": "red",
    "redPack": 1.01
  }
};

cc._RF.pop();