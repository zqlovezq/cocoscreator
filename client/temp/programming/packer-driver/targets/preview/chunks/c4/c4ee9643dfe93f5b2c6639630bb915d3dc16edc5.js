System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, Random, _dec, _class, _class2, _crd, ccclass, property, Math_RATIO, SkillTrigger;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
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
      Random = _unresolved_3.Random;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05e63W+VgxCGayANo83hOPL", "SkillTrigger", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      Math_RATIO = 10000;

      _export("SkillTrigger", SkillTrigger = (_dec = ccclass('SkillTrigger'), _dec(_class = (_class2 = class SkillTrigger {
        constructor() {
          this.configId = void 0;
          this.configTab = void 0;
        }

        static get(triggerId) {
          var sk = SkillTrigger.skillTriger.pop();

          if (sk == null) {
            sk = new SkillTrigger();
          }

          sk.setConfigId(triggerId);
          return sk;
        }

        static put(sk) {
          SkillTrigger.skillTriger.push(sk);
        }

        setConfigId(id) {
          this.configId = id;
          this.configTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().TriggerTableById.getValue(id);
        }

        isType(type) {
          return this.configTab.Triggertype == type;
        }
        /** 触发参数 */


        getParameters() {
          return this.configTab.Parameters;
        }
        /** 触发器参数是否成功 */


        isParametersSucceed(parm) {
          return parm >= this.getParameters();
        }
        /** 触发器概率是否成功 */


        isTriggerChanceSucceed() {
          // 触发器
          return (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).isSuccess(this.configTab.Chance);
        }

        reset() {
          this.configId = 0;
          this.configTab = null;
        }

        destroy() {
          SkillTrigger.skillTriger.push(this);
        }

      }, _class2.skillTriger = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4ee9643dfe93f5b2c6639630bb915d3dc16edc5.js.map