System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SkillControl, _dec, _class, _crd, ccclass, property, SkillTimePush;

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../obj/role/AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "./SkillControl", _context.meta, extras);
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
      SkillControl = _unresolved_2.SkillControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be0922Qm7JNTqX52Ve8Y2NQ", "SkillTimePush", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 技能时间释放 
      */

      _export("SkillTimePush", SkillTimePush = (_dec = ccclass('SkillTimePush'), _dec(_class = class SkillTimePush {
        constructor() {
          this.skills = [];
          this.info = null;
        }

        clear() {
          this.skills.length = 0;
        }

        setAbsInfo(_info) {
          this.info = _info;
        }

        addSkill(skill) {
          this.skills.push(skill);
        }

        check() {
          if (this.skills.length == 0 || this.info == null) {
            return;
          }

          for (let index = 0; index < this.skills.length; index++) {
            const skill = this.skills[index];

            if (skill.isInCD(this.info.attrData)) {
              continue;
            }

            (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
              error: Error()
            }), SkillControl) : SkillControl).ins.useSkillAndBullet(skill, this.info.abs);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1a09e9f9a74338c3ad88c07e423249dbe73c0dd.js.map