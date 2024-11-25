System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, PowerBase, Random, _dec, _class, _crd, ccclass, property, EffectTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./PowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      PowerBase = _unresolved_3.PowerBase;
    }, function (_unresolved_4) {
      Random = _unresolved_4.Random;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b9a0sEORJK/bH58oM8TpUS", "EffectTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectTab", EffectTab = (_dec = ccclass('EffectTab'), _dec(_class = class EffectTab extends (_crd && PowerBase === void 0 ? (_reportPossibleCrUseOfPowerBase({
        error: Error()
      }), PowerBase) : PowerBase) {
        constructor() {
          super(...arguments);
          this.powerType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_EffectTable;
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Id = void 0;
          // ID 
          this.EffectType = void 0;
          // 效果类型 
          this.Parameters = void 0;
          // 效果参数 
          this.RandomWave = void 0;
          // 效果基础值波动参数 
          //---------------------自有字段-------------------
          this.parm = 0;
        }

        setConfigId(id) {
          super.setConfigId(id);
          this.random();
        }
        /** 随机属性
         * 只有buff添加到人身上时会重新随机
         */


        random() {
          this.parm = this.Parameters[0];

          if (this.RandomWave.length > 0) {
            this.parm = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).getRandomInt(this.parm + this.RandomWave[0], this.parm + this.RandomWave[1] + 1);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ca0165309b9c3930607b4dfb5f427ea1d89d47b.js.map