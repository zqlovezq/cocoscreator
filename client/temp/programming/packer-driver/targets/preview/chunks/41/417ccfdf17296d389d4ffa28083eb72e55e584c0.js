System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, JsonAsset, Leveljson, LevelPhase, LevelPhaseTime, _crd, PhaseclearType, defaultAddTime;

  _export({
    Leveljson: void 0,
    LevelPhase: void 0,
    LevelPhaseTime: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      JsonAsset = _cc.JsonAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a086HuYDlP6bzOaonRcQ5S", "Leveljson", undefined);

      __checkObsolete__(['resources', 'JsonAsset']);

      _export("PhaseclearType", PhaseclearType = /*#__PURE__*/function (PhaseclearType) {
        PhaseclearType[PhaseclearType["time"] = 1] = "time";
        PhaseclearType[PhaseclearType["bossDead"] = 2] = "bossDead";
        PhaseclearType[PhaseclearType["allDead"] = 3] = "allDead";
        return PhaseclearType;
      }({}));

      defaultAddTime = 1;
      /** 关卡配置 */

      _export("Leveljson", Leveljson = class Leveljson {
        constructor() {
          this.drop = [];
          this.phaseList = [];
          this.levelPhase = void 0;
          //当前阶段
          this.nowTimeIndex = void 0;
          this.nowTime = void 0;
        }

        static create(path) {
          var json = resources.get("leveljson/" + path, JsonAsset);
          var dd = new Leveljson();
          dd.initData(json.json);
          return dd;
        }

        initData(json) {
          this.drop = json.drop;

          for (var i = 0; i < json.phaseList.length; i++) {
            var dd = new LevelPhase();
            dd.phase = json.phaseList[i].phase;
            dd.phaseclearcondition = json.phaseList[i].phaseclearcondition;
            dd.phaseTime = json.phaseList[i].phasetime;
            dd.times = [];
            this.phaseList.push(dd);

            for (var j = 0; j < json.phaseList[i].times.length; j++) {
              var time = json.phaseList[i].times[j];
              var lt = new LevelPhaseTime();

              for (var key in time) {
                lt[key] = time[key];
              }

              lt.init();
              dd.times.push(lt);
              lt.time += defaultAddTime;
            }

            dd.phaseOverTime = dd.phaseTime;

            if (dd.phaseOverTime == 0) {
              if (dd.times.length) {
                dd.phaseOverTime = dd.times[dd.times.length - 1].time + 1;
              }
            }

            dd.phaseOverTime += 1;
          }

          console.log("aa", this);
        }

        getTotalTime() {
          var total = 0;

          for (var index = 0; index < this.phaseList.length; index++) {
            var v = this.phaseList[index];
            total += v.phaseTime;
          }

          return total;
        }

        setNowPhase(phase) {
          this.levelPhase = this.phaseList[phase];
          this.nowTimeIndex = 0;
          this.nowTime = null;
        }

        hasPhase(phaseIndex) {
          return this.phaseList[phaseIndex];
        }

      });

      _export("LevelPhase", LevelPhase = class LevelPhase {
        constructor() {
          this.phase = void 0;
          this.phaseclearcondition = void 0;
          this.phaseTime = void 0;
          this.times = void 0;
          this.phaseOverTime = void 0;
        }

      });

      _export("LevelPhaseTime", LevelPhaseTime = class LevelPhaseTime {
        constructor() {
          /** 时间 */
          this.time = void 0;

          /** 怪物id */
          this.monsterId = void 0;

          /** 出现次数 */
          this.count = void 0;

          /** 是否块内随机 */
          this.isRand = void 0;

          /** 出现间隔 */
          this.cycles = void 0;

          /** 攻击 */
          this.attack = void 0;

          /** 血量 */
          this.hp = void 0;

          /** 防御 */
          this.def = void 0;

          /** 抗暴 */
          this.resistcritical = void 0;

          /** 减伤系数修正 */
          this.damrefix = 66;

          /** 速度 */
          this.spe = void 0;

          /** 经验 */
          this.exp = void 0;

          /** 掉落 */
          this.drop = void 0;

          /** 出现位置块 */
          this.position = void 0;

          /** 警告：1.怪潮、2.BOSS */
          this.warning = void 0;
          this.inTime = false;

          /** 当前次数 */
          this.nowCount = 1;
          this.dt = 0;
        }

        init() {
          this.cycles = this.cycles || 0;

          if (this.isMonster()) {
            this.cycles = this.cycles * 1000;
          }
        }

        //是否进入时间
        isMonster() {
          return this.monsterId != undefined;
        }

        isWarning() {
          return this.warning != undefined;
        }
        /** 结束时间 */


        overTime() {
          if (this.cycles && this.count) {
            return this.time + Math.ceil(this.cycles * this.count / 1000);
          }

          return this.time;
        }

        isCyclesOver() {
          if (this.cycles == 0) {
            return true;
          }

          return this.nowCount >= this.count;
        }

        updateTime(_dt) {
          if (this.inTime && this.count && this.count != this.nowCount) {
            this.dt += _dt;

            if (this.dt >= this.cycles) {
              this.dt -= this.cycles;
              this.nowCount += 1;
              return true;
            }
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=417ccfdf17296d389d4ffa28083eb72e55e584c0.js.map