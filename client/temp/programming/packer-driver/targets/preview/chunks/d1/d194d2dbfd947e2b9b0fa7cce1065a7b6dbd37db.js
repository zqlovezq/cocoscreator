System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsRoleInfo, tab, Func, EventMgr, FightEvent, SkillControl, SkillGroupCd, _dec, _class, _crd, ccclass, property, RoleInfo;

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "./Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroFightInfo(extras) {
    _reporterNs.report("HeroFightInfo", "../../../../data/HeroFightInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "../../../../power/powerTab/EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "../../../../power/powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "../../../skill/SkillControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupCd(extras) {
    _reporterNs.report("SkillGroupCd", "../../../skill/SkillGroupCd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTriggerTab(extras) {
    _reporterNs.report("SkillTriggerTab", "../../../../power/powerTab/SkillTriggerTab", _context.meta, extras);
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
      AbsRoleInfo = _unresolved_2.AbsRoleInfo;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      Func = _unresolved_4.Func;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      FightEvent = _unresolved_6.FightEvent;
    }, function (_unresolved_7) {
      SkillControl = _unresolved_7.SkillControl;
    }, function (_unresolved_8) {
      SkillGroupCd = _unresolved_8.SkillGroupCd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e273zJdixGiYGLCb9GAJfo", "RoleInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleInfo", RoleInfo = (_dec = ccclass('RoleInfo'), _dec(_class = class RoleInfo extends (_crd && AbsRoleInfo === void 0 ? (_reportPossibleCrUseOfAbsRoleInfo({
        error: Error()
      }), AbsRoleInfo) : AbsRoleInfo) {
        constructor() {
          super();
          this.abs = void 0;
          this.configTab = void 0;
          this.heroStarTab = void 0;
          this.heroFightInfo = void 0;
          //英雄数据

          /** rogue属性*/
          this.rogueAttr = new Map();

          /** 位置索引 */
          this.posIndex = 0;
          this.skillGroupCDMap = new Map();
          this.holdTimeTrigger = [];
          this.skillGroupCDMap.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack, new (_crd && SkillGroupCd === void 0 ? (_reportPossibleCrUseOfSkillGroupCd({
            error: Error()
          }), SkillGroupCd) : SkillGroupCd)());
          this.skillGroupCDMap.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_ActionAttack, new (_crd && SkillGroupCd === void 0 ? (_reportPossibleCrUseOfSkillGroupCd({
            error: Error()
          }), SkillGroupCd) : SkillGroupCd)());
        }

        init() {
          super.init();
        }

        reset() {
          super.reset();
          this.holdTimeTrigger.length = 0;
        }

        setHeroInfo(hero) {
          this.reset();
          this.heroFightInfo = hero;
          this.setConfigId(this.heroFightInfo.itemId);
          /** 设置局外带进来的属性 */

          this.setAttrList(this.heroFightInfo.attrList);
          this.attrData.star = this.heroFightInfo.star;
          /** 设置局外带进来的技能 */

          for (var index = 0; index < this.heroFightInfo.skillList.length; index++) {
            var v = this.heroFightInfo.skillList[index];
            var skill = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable, v);
            this.addTakeSkill(skill, false);
          }

          for (var iterator of this.skillGroupCDMap) {
            iterator[1].setAbsInfo(this);
          }
        }

        setConfigId(id) {
          super.setConfigId(id);
          this.setConfigTab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(id));
          this.heroStarTab = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy2((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroStarUpTable, "HeroId", id, "HeroStar", this.heroFightInfo.star);
          this.skillGroupMap.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack, this.createSkillGroup(this.heroStarTab.SkillGroupIds));
          this.sysnHeroAddAttackCount();
          console.log("RoleInfo", this);
        }

        get normalGroupCD() {
          return this.skillGroupCDMap.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack);
        }

        get weaponeGroupCD() {
          return this.skillGroupCDMap.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_ActionAttack);
        }

        inSkillGroupCD(skillType, cb) {
          this.skillGroupCDMap.get(skillType).inCd(this.skillGroupMap.get(skillType), cb);
          return this.skillGroupCDMap.get(skillType);
        }

        resetTestGroupId(id) {
          if (id == 0) {
            return;
          }

          this.switchSkillGroup(this.createSkillGroup(id));
        }

        updateFrame(dt) {
          super.updateFrame(dt);

          if (this._weaponeGroup) {
            if (this.weaponeGroupCD.isCDing) {
              this.weaponeGroupCD.updateFrame(dt);
            } else if (this.isAudo) {
              this.useWeaponSkill(null);
            }
          }
        }

        useWeaponSkill(targetPos) {
          if (this.weaponeGroup == null) {
            return;
          }

          if (this.abs == null) {
            return;
          }

          if (this.abs.isDead) {
            return;
          }

          if (!this.abs.isActive) {
            return;
          }

          if (this.weaponeGroupCD.isCDing) {
            return;
          }

          if (this.weaponeGroup.nowSkill.isInCD(this.attrData)) {
            return;
          }

          if (targetPos == null) {
            if (!this.checkSkillGroupUse((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttackType.AttackType_ActionAttack)) {
              return;
            }
          }

          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.useSkillTarget(this.weaponeGroup.nowSkill, this.abs);
          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.useSkillBullet(this.weaponeGroup.nowSkill, this.abs, targetPos);
          this.subAttackByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_ActionAttack, 1);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Skill_Attack_Count_Change, this.weaponeGroup.configId);

          if (this.weaponeGroup.checkSkillCD()) {
            // console.log("进入cd")
            this.inWeaponeCd();
          }
        }

        inWeaponeCd() {
          this.inSkillGroupCD((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_ActionAttack, () => {
            // console.log("cd完成---")
            this.weaponeGroup.fillUp();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Skill_Attack_Count_Change, this.weaponeGroup.configId);
          });
        }

        onLevelUp(lastLv, lv) {
          this.attrData.level = lv;
          this.levelUpEffect(lastLv, lv);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Role_Level_Up, this.heroFightInfo.itemId, lastLv, lv);

          if (lastLv == 0) {
            return;
          }

          this.abs.onLevelUp();
        }
        /** 是否为战士 */


        isHeroClassWarrior() {
          return this.configTab.Class == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior;
        }

        isHeroClass(heroClass) {
          return this.configTab.Class == heroClass;
        }

        subNormalAttack(count) {
          super.subNormalAttack(count);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Skill_Attack_Count_Change, this.normalGroup.configId);
        }

        normalFillUp() {
          this.normalGroup.fillUp();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Skill_Attack_Count_Change, this.normalGroup.configId);
        }

        addNormalAttackCount(count) {
          super.addNormalAttackCount(count);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Skill_Attack_Count_Change, this.normalGroup.configId);
        }

        switchSkillGroup(skillGroup) {
          super.switchSkillGroup(skillGroup);
          this.sysnHeroAddAttackCount();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Role_change_SkillGroup, this);
        }

        attrChange(attrType, value) {
          super.attrChange(attrType, value);

          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_AttackNum) {
            this.sysnHeroAddAttackCount();
          }
        }

        sysnHeroAddAttackCount() {
          if (this.normalGroup) {
            this.normalGroup.setHeroAttackCount(this.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_AttackNum));
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Skill_Attack_Count_Change, this.normalGroup.configId);
          }
        }

        addEffect(effectTab) {
          super.addEffect(effectTab);

          if (effectTab.Parameters[1]) {
            this.addLevelEffect(effectTab, this.heroFightInfo.level);
            this.levelEffects.push(effectTab);
          }
        }

        removeEffect(effectTab) {
          super.removeEffect(effectTab);

          if (effectTab.Parameters[1]) {
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).remove(this.levelEffects, this.levelEffects.indexOf(effectTab));
          }
        }

        addLevelEffect(effectTab, upLv) {
          var num = effectTab.Parameters[1];
          this.attrData.addAttr(effectTab.EffectType, num * upLv);
        }
        /** 处理根据英雄等级增加的属性 */


        levelUpEffect(lastLv, lv) {
          var upCount = lv - lastLv;

          if (upCount <= 0) {
            return;
          }

          for (var index = 0; index < this.levelEffects.length; index++) {
            this.addLevelEffect(this.levelEffects[index], upCount);
          }
        }

        refreshHoldTime() {
          super.refreshHoldTime();
        }

        onBorn() {
          this.initHoldTimeTrigger();
          super.onBorn();

          if (this.holdTimeTrigger.length) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Create_HoldTime_Effect, this.abs);
          }
        }

        initHoldTimeTrigger() {
          this.holdTimeTrigger.length = 0;
          var tempSkills = [];
          var skillGroup = this.normalGroup;
          var skill;

          for (var j = 0; j < skillGroup.skills.length; j++) {
            skill = skillGroup.skills[j];
            tempSkills.push(skill);
          }

          if (this.weaponeGroup) {
            //招式
            for (var _j = 0; _j < this.weaponeGroup.skills.length; _j++) {
              skill = this.weaponeGroup.skills[_j];
              tempSkills.push(skill);
            }
          }

          for (var index = 0; index < this.takeSkills.length; index++) {
            skill = this.takeSkills[index];
            tempSkills.push(skill);
          }

          for (var _index = 0; _index < tempSkills.length; _index++) {
            var _skill = tempSkills[_index];

            for (var _index2 = 0; _index2 < _skill.triggerTabs.length; _index2++) {
              var triggerTab = _skill.triggerTabs[_index2];

              if (triggerTab.TriggerCondition == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).TriggerCondition.TriggerCondition_HoldTime) {
                this.holdTimeTrigger.push(triggerTab);
              }
            }
          }
        }

        getLevel() {
          return this.heroFightInfo.level;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d194d2dbfd947e2b9b0fa7cce1065a7b6dbd37db.js.map