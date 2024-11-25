System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, tmpList, SkillTriggerMap;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "59df0BEOf1HCYq0dAYrlF2O", "SkillTriggerMap", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      tmpList = [];
      /** 技能触发器 
      */

      _export("SkillTriggerMap", SkillTriggerMap = (_dec = ccclass('SkillTriggerMap'), _dec(_class = class SkillTriggerMap {
        constructor() {
          this.triggerMap = new Map();
        }

        clear() {
          this.triggerMap.clear();
        }

        getListByType(type) {
          if (this.triggerMap.has(type)) {
            return this.triggerMap.get(type);
          }

          this.triggerMap.set(type, []);
          return this.triggerMap.get(type);
        }

        addSkill(skill) {
          if (skill.isHasTrigger()) {
            skill.triggerTabs.forEach(v => {
              let list = this.getListByType(v.Triggertype);

              if (list) {
                list.push(skill);
              }
            });
          }
        }

        removeSkill(skill) {
          if (skill.isHasTrigger()) {
            skill.triggerTabs.forEach(v => {
              let list = this.getListByType(v.Triggertype);

              if (list) {
                let index = list.findIndex(v => v.Id == skill.Id);

                if (index != -1) {
                  list.splice(index, 1);
                }
              }
            });
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b58010858265353e6a16f95313438d668c39d68f.js.map