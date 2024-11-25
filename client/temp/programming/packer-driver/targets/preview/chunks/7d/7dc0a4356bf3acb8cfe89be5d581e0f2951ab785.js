System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, Random, SkillTrigger, _dec, _class, _crd, ccclass, property, Math_RATIO, Skill;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTrigger(extras) {
    _reporterNs.report("SkillTrigger", "./SkillTrigger", _context.meta, extras);
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
    }, function (_unresolved_4) {
      SkillTrigger = _unresolved_4.SkillTrigger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ca15Dc4/pHsribLhbnwjUC", "Skill", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      Math_RATIO = 10000;

      _export("Skill", Skill = (_dec = ccclass('Skill'), _dec(_class = class Skill {
        constructor() {
          this.configId = void 0;
          this.configTab = void 0;
          this.triggers = [];
          this.originalSkill = void 0;
          this._bulletTab = void 0;
        }

        get bulletTab() {
          if (this._bulletTab == null) {
            this._bulletTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BulletTableById.getValue(this.configTab.Bullet);
          }

          return this._bulletTab;
        }

        setConfigId(id) {
          this.configId = id;
          this.configTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SkillTableById.getValue(id);
          this.triggers.length = 0;

          if (this.isHasTrigger()) {
            for (var index = 0; index < this.configTab.Trigger.length; index++) {
              var element = this.configTab.Trigger[index];
              this.triggers.push((_crd && SkillTrigger === void 0 ? (_reportPossibleCrUseOfSkillTrigger({
                error: Error()
              }), SkillTrigger) : SkillTrigger).get(element));
            }
          }
        }
        /** 是否为普通攻击 */


        isNormalAttack() {
          return this.configTab.SkillType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SkillType.SkillType_NormalAttack;
        }
        /** 是否为招式攻击 */


        isMovesAttack() {
          return this.configTab.SkillType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SkillType.SkillType_MovesAttack;
        }
        /** 是否有触发器 */


        isHasTrigger() {
          return this.configTab.Trigger.length > 0;
        }

        isTrigger(type) {
          if (this.isHasTrigger()) {
            for (var index = 0; index < this.triggers.length; index++) {
              var element = this.triggers[index];

              if (element.isType(type)) {
                return true;
              }
            }
          }

          return false;
        }
        /** 是否连射 */


        isRunningShotSuccess(addRate) {
          var rate = addRate + this.configTab.RunningShot[2];
          return (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).isSuccess(rate);
        }

        isHasBuff() {
          return this.configTab.AddBuff.length > 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7dc0a4356bf3acb8cfe89be5d581e0f2951ab785.js.map