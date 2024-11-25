System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, PowerBase, _dec, _class, _crd, ccclass, property, SkillGroupTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "./SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./PowerBase", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "939deja8/FPVpxLYv/Dkh3t", "SkillGroupTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillGroupTab", SkillGroupTab = (_dec = ccclass('SkillGroupTab'), _dec(_class = class SkillGroupTab extends (_crd && PowerBase === void 0 ? (_reportPossibleCrUseOfPowerBase({
        error: Error()
      }), PowerBase) : PowerBase) {
        constructor(...args) {
          super(...args);
          this.powerType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_SkillGroupTable;
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Id = void 0;
          // ID 
          this.Icon = void 0;
          // 技能图标 
          this.AttackType = void 0;
          // 攻击类型 
          this.NormalAttack = void 0;
          // 普攻技能 
          this.AttackCount = void 0;
          // 出手次数 
          this.BreathTime = void 0;
          // 调息时间 
          //---------------------自有字段-------------------
          this.skills = [];
          this.normalSkills = [];
          this.nowSkill = void 0;
          this.nowSkillIndex = 0;
          //普通攻击依次替换
          //----------切换技能组需要清除的属性
          this._attackCount = 0;
          //攻击次数（减免时不增加次数）
          this.realAttackCount = 0;
          //实际的攻击次数
          this.triggerAttackCount = 0;
          //触发器攻击次数（触发器成功时， 会清零）
          this.first = false;
          this.heroAddCount = 0;
        }

        //英雄增加出手次数
        setConfigId(id) {
          super.setConfigId(id);

          if (this.configId == 0) {
            return;
          }

          this.skills.length = 0;
          this.normalSkills.length = 0;

          for (let index = 0; index < this.NormalAttack.length; index++) {
            const element = this.NormalAttack[index];
            this.addSkill(element);
          }
        }
        /** 设置怪物技能 */


        setMonsterSkillIds(skillIds) {
          this.BreathTime = 0;
          this.AttackType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack;
          this.AttackCount = 1000000;
          this.NormalAttack = skillIds;
          this.skills.length = 0;
          this.normalSkills.length = 0;

          for (let index = 0; index < this.NormalAttack.length; index++) {
            const element = this.NormalAttack[index];
            this.addSkill(element);
          }

          this.setDefaultNormalSkill();
        }

        clearAttrData() {
          this._attackCount = 0;
          this.realAttackCount = 0;
          this.triggerAttackCount = 0;
          this.heroAddCount = 0;
          this.setDefaultNormalSkill();
        }

        addSkill(id) {
          let skill = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_SkillTable, id);
          this.skills.push(skill);

          if (skill.isNormalAttack()) {
            this.normalSkills.push(skill);
          }

          skill.isActionSkill = this.isActionSkill();
        }

        setDefaultNormalSkill() {
          this.normalSkills.sort((a, b) => {
            return a.Priority - b.Priority;
          });
          this.first = true;
          this.nowSkillIndex = 0;
          this.nowSkill = this.normalSkills[this.nowSkillIndex];
        }

        nextNormalSkill() {
          if (this.first) {
            this.nowSkillIndex = 0;
            this.first = false;
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
          return this.AttackType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack;
        }
        /** 是否为武器招式 */


        isActionSkill() {
          return this.AttackType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_ActionAttack;
        }

        fillUp() {
          this._attackCount = 0;
          this.realAttackCount = 0;
        }

        subAttack(count) {
          count = count || 0;
          this._attackCount += count;
          this.realAttackCount += count;
          this.triggerAttackCount += count;
        }

        addAttackCount(count) {
          this._attackCount -= count;
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
          return this.AttackCount + this.heroAddCount;
        }

        setHeroAttackCount(count) {
          this.heroAddCount = count;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eddc9f67fefb4e73e5fc9da5900e5b4b281ad91e.js.map