System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tab, FightMacro, Random, _crd;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
  }

  _export("Random", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      FightMacro = _unresolved_3.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "74439Hc7f5ASYfqHt5LsUvt", "Random", undefined);

      /**
       * 随机数
       */
      _export("Random", Random = class Random {
        static range(min, max) {
          if (!this.seed && this.seed != 0) {
            this.seed = new Date().getTime();
          }

          max = max || 1;
          min = min || 0;
          this.seed = (this.seed * 9301 + 49297) % 233280;
          var rnd = this.seed / 233280.0;
          return min + rnd * (max - min);
        }
        /**
        获取随机整数
        @param min 随机的最小值
        @param max 随机的最大值(不包括该值)
        @returns 返回一个整数，范围是 [min, max)
        */


        static getRandomInt(min, max) {
          // return Math.floor(Math.random() * (max - min)) + min;
          return Math.floor(this.range(min, max));
        }
        /** 获取一个0-100的随机数 */


        static getInt() {
          return Random.getRandomInt(0, 101);
        }
        /** 获取一个0-10000的随机数*/


        static getInt10000() {
          return Random.getRandomInt(0, 10001);
        }
        /** 检测概率是否成功 获取一个0-10000的随机数 */


        static isSuccess(chance) {
          return chance && (chance >= (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE || chance >= Random.getInt10000());
        }

        static PFromC(C) {
          var dCurP = 0.0;
          var dPreSuccessP = 0.0;
          var dPE = 0;
          var nMaxFail = Math.ceil(1.0 / C);

          for (var i = 1; i <= nMaxFail; ++i) {
            dCurP = Math.min(1.0, i * C) * (1 - dPreSuccessP);
            dPreSuccessP += dCurP;
            dPE += i * dCurP;
          }

          return 1.0 / dPE;
        }

        static CFromP(P) {
          var conf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PRBTableById.getValue(Math.floor(P));

          if (conf) {
            return conf.CValue;
          }

          return P; // let dUp: number = P;
          // let dLow: number = 0.0;
          // let dMid: number = P;
          // let dPLast: number = 1.0;
          // while (true) {
          //     dMid = (dUp + dLow) / 2.0;
          //     let dPtested: number = Random.PFromC(dMid);
          //     if (Math.abs(dPtested - dPLast) <= 0.0) {
          //         break;
          //     }
          //     if (dPtested > P) {
          //         dUp = dMid;
          //     } else {
          //         dLow = dMid;
          //     }
          //     dPLast = dPtested;
          // }
          // return dMid;
        }

      });

      Random.seed = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc1437cb7cebd644d18a41a96e939b16f0fa826e.js.map