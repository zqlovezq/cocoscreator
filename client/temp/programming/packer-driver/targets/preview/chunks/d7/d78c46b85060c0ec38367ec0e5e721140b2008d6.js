System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, AbsControl, tab, BulletControl, SearchEnemy, BuffControl, EffectControl, PlayerControl, AbsObjType, SkillPowerControl, EventMgr, FightEvent, _dec, _class, _class2, _crd, ccclass, property, tempSkills, tempPos, SkillControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "../obj/bullet/BulletControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSearchEnemy(extras) {
    _reporterNs.report("SearchEnemy", "../ai/SearchEnemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "../buff/BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectControl(extras) {
    _reporterNs.report("EffectControl", "../effect/EffectControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "../../view/rogue/RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "../../power/powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPowerControl(extras) {
    _reporterNs.report("SkillPowerControl", "./SkillPowerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      BulletControl = _unresolved_4.BulletControl;
    }, function (_unresolved_5) {
      SearchEnemy = _unresolved_5.SearchEnemy;
    }, function (_unresolved_6) {
      BuffControl = _unresolved_6.BuffControl;
    }, function (_unresolved_7) {
      EffectControl = _unresolved_7.EffectControl;
    }, function (_unresolved_8) {
      PlayerControl = _unresolved_8.PlayerControl;
    }, function (_unresolved_9) {
      AbsObjType = _unresolved_9.AbsObjType;
    }, function (_unresolved_10) {
      SkillPowerControl = _unresolved_10.SkillPowerControl;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_unresolved_12) {
      FightEvent = _unresolved_12.FightEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fe00jZ0ppNsJl0og1xZQkz", "SkillControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempSkills = [];
      tempPos = new Vec3(0, 0, 0);

      _export("SkillControl", SkillControl = (_dec = ccclass('SkillControl'), _dec(_class = (_class2 = class SkillControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new SkillControl();
          }

          return this._instance;
        }

        init() {
          this.register();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).addSkill, this.addSkill, this);
        }

        addSkill(skill, attack) {
          skill.initCd();
          attack.info.addTakeSkill(skill, true);
        }

        switchSkill(skillTab, attack) {
          attack.info.normalGroup.nowSkill = skillTab;
        }

        switchSkillGroup(skillGroup, attack) {
          attack.info.switchSkillGroup(skillGroup);
        }
        /** 释放技能 */


        useSkillAndBullet(skill, attack, targetPos) {
          if (targetPos === void 0) {
            targetPos = null;
          }

          if (skill.isInCD(attack.info.attrData)) {
            console.log("技能cd中--", skill);
            return;
          }

          this.useSkillTarget(skill, attack);
          this.useSkillBullet(skill, attack, targetPos);
        }
        /** 使用技能目标 */


        useSkillTarget(skill, attack) {
          if (skill.isInCD(attack.info.attrData)) {
            console.log("技能cd中--", skill);
            return;
          }

          if (attack == null || attack && attack.isDestroy()) {
            console.log("已销毁");
            return;
          }

          skill.use();
          attack.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_DetectionSkill, {
            skillId: skill.Id
          });
          var enemys = (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
            error: Error()
          }), SearchEnemy) : SearchEnemy).skillGetBySearchEnemy(attack.objId, attack.objType, attack.getPosition(), skill.EffectUnit, skill.SearchEnemy, skill.SearchNum); // skill.configTab.EffectNum)

          if (enemys.length == 0) {
            // console.log("useSkillTarget 没有找到目标")
            return;
          }

          for (var index = 0; index < enemys.length; index++) {
            var enemy = enemys[index];
            this.skillAttr(skill, attack, enemy);
            this.skillPower(skill, attack, enemy);
          }

          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.checkSkillAddBuff(skill, attack, enemys);
        }
        /** 释放技能属性 */


        skillAttr(skill, attack, enemy) {
          if (skill.Effect.length == 0) {
            return;
          }

          for (var index = 0; index < skill.effectTabs.length; index++) {
            var effectTab = skill.effectTabs[index];
            effectTab.random();
            (_crd && EffectControl === void 0 ? (_reportPossibleCrUseOfEffectControl({
              error: Error()
            }), EffectControl) : EffectControl).ins.addEffect(effectTab, attack, enemy);
          }
        }
        /** 释放技能增强 */


        skillPower(skill, attack, enemy) {
          (_crd && SkillPowerControl === void 0 ? (_reportPossibleCrUseOfSkillPowerControl({
            error: Error()
          }), SkillPowerControl) : SkillPowerControl).ins.skillPowerBySkill(enemy.info, skill);
        }
        /** 释放技能子弹 */


        useSkillBullet(skill, attack, targetPos, bulletGroupId, runningShot) {
          if (targetPos === void 0) {
            targetPos = null;
          }

          if (bulletGroupId === void 0) {
            bulletGroupId = 0;
          }

          if (runningShot === void 0) {
            runningShot = false;
          }

          if (skill.Bullet == 0) {
            return;
          }

          if (targetPos) {
            return (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
              error: Error()
            }), BulletControl) : BulletControl).ins.clickEmitBullet(runningShot ? skill.runningShotBulletTab : skill.bulletTab, attack, targetPos, bulletGroupId);
          }

          return (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
            error: Error()
          }), BulletControl) : BulletControl).ins.audoEmitBullet(runningShot ? skill.runningShotBulletTab : skill.bulletTab, attack, bulletGroupId);
        }
        /** 肉鸽使用技能目标 */


        rogueUseSkillTarget(rogueInfo) {
          var attack = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.roles[0];
          var searchType = this.getSearchTypeByOwn(rogueInfo.rogueTab.Own);
          var ownRoles = (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
            error: Error()
          }), SearchEnemy) : SearchEnemy).skillGetBySearchEnemy(attack.objId, (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role, attack.getPosition(), (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectUnit.EffectUnit_Friend, searchType, 1, true);
          console.log(ownRoles);

          var _loop = function _loop() {
            var ownRole = ownRoles[index];
            rogueInfo.skills.forEach(skill => {
              ownRole.info.addTakeSkill(skill, true);
            });

            if (rogueInfo.skillGroup) {
              ownRole.info.addWeaponSkillGroup(rogueInfo.skillGroup);
            }
          };

          for (var index = 0; index < ownRoles.length; index++) {
            _loop();
          }

          var roles = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getRoles();
          var parms = {
            rogueId: rogueInfo.Id
          };

          for (var _index = 0; _index < roles.length; _index++) {
            var v = roles[_index];
            v.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Triggertype.Triggertype_Rogue, parms);
          }
        }
        /** 角色升级肉鸽使用技能目标 */


        rogueUseSkillRoleLevelUp(rogueInfo) {}
        /** 根据英雄职业获取锁敌规则 */


        getSearchTypeByOwn(ownClass) {
          switch (ownClass) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_All:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).SearchEnemy.SearchEnemy_All;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Assassin:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).SearchEnemy.SearchEnemy_Assassin;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Archer:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).SearchEnemy.SearchEnemy_Archer;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Priest:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).SearchEnemy.SearchEnemy_Priest;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Caster:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).SearchEnemy.SearchEnemy_Caster;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Warrior:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).SearchEnemy.SearchEnemy_Warrior;
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d78c46b85060c0ec38367ec0e5e721140b2008d6.js.map