System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, Skill, _dec, _class, _crd, ccclass, property, SkillGroup;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkill(extras) {
    _reporterNs.report("Skill", "./Skill", _context.meta, extras);
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
      Skill = _unresolved_3.Skill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08928xUPR1OmKQQXdSctrXL", "SkillGroup", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillGroup", SkillGroup = (_dec = ccclass('SkillGroup'), _dec(_class = class SkillGroup {
        constructor() {
          this.configId = void 0;
          this.configTab = void 0;
          this.skills = [];
          this.normalSkills = [];
          this.nowSkill = void 0;
          this.nowSkillIndex = 0;
          //普通攻击依次替换
          this.isWeapen = false;
          //是否是武器招式
          //----------切换技能组需要清除的属性
          this._attackCount = 0;
          //攻击次数（减免时不增加次数）
          this.realAttackCount = 0;
          //实际的攻击次数
          this.triggerAttackCount = 0;
          //触发器攻击次数（触发器成功时， 会清零）
          this.first = false;
        }

        setConfigId(id) {
          this.configId = id;
          this.configTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().SkillGroupTableById.getValue(id);
          this.skills.length = 0;
          this.normalSkills.length = 0;

          for (let index = 0; index < this.configTab.NormalAttack.length; index++) {
            const element = this.configTab.NormalAttack[index];
            this.addSkill(element);
          }
        }

        clearAttrData() {
          this._attackCount = 0;
          this.realAttackCount = 0;
          this.triggerAttackCount = 0;
          this.setDefaultNormalSkill();
        }

        addSkill(id) {
          let skill = new (_crd && Skill === void 0 ? (_reportPossibleCrUseOfSkill({
            error: Error()
          }), Skill) : Skill)();
          skill.setConfigId(id);
          this.skills.push(skill);

          if (skill.isNormalAttack()) {
            this.normalSkills.push(skill);
          }

          if (skill.isMovesAttack()) {
            this.isWeapen = true;
            this.normalSkills.push(skill);
          }
        }

        setDefaultNormalSkill() {
          this.first = true;
          this.nowSkillIndex = 0;
          this.nowSkill = this.normalSkills[this.nowSkillIndex];
        }

        nextNormalSkill() {
          if (this.first) {
            this.nowSkillIndex = 0;
          } else {
            this.nowSkillIndex += 1;
          }

          if (this.nowSkillIndex >= this.normalSkills.length) {
            this.nowSkillIndex = 0;
          }

          this.nowSkill = this.normalSkills[this.nowSkillIndex];
        }
        /** 是否为普通技能 */


        isNormalSkill() {
          return this.normalSkills.length > 0;
        }
        /** 是否为武器招式 */


        isWeapenSkill() {
          return this.isWeapen;
        }

        fillUp() {
          this._attackCount = 0;
          this.realAttackCount = 0;
        }

        subAttack(count) {
          count = count || 1;
          this._attackCount += count;
          this.realAttackCount += count;
          this.triggerAttackCount += count;
        }

        clearTriggerAttackCount() {
          this.triggerAttackCount = 0;
        }

        checkSkillCD() {
          return this.getCanAttackCount() <= 0;
        }
        /** 获取可出手次数 */


        getCanAttackCount() {
          return this.getAttackSum() - this._attackCount;
        }

        getAttackSum() {
          return this.configTab.AttackCount;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9fcbcbe8e9a61407578e91320479fe9069b0c18d.js.map