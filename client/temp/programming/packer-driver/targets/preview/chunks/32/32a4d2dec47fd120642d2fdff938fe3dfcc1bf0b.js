System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsObjInfo, AbsObjInfoAttr, AbsStateType, tab, BulletControl, SkillControl, SkillTriggerControl, AbsObjType, BuffControl, SearchEnemy, EventMgr, FightEvent, SkillPowers, SkillTriggerMap, FightAttrData, DamageSource, FightMacro, FrameControl, SkillTimePush, _dec, _class, _crd, ccclass, property, AbsRoleInfo;

  function _reportPossibleCrUseOfAbsObjInfo(extras) {
    _reporterNs.report("AbsObjInfo", "../AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfoAttr(extras) {
    _reporterNs.report("AbsObjInfoAttr", "../AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "../../../power/powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "./AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "../bullet/BulletControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "../../skill/SkillControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTriggerControl(extras) {
    _reporterNs.report("SkillTriggerControl", "../../skill/SkillTriggerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTriggerParms(extras) {
    _reporterNs.report("TriggerParms", "../../skill/SkillTriggerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "../../buff/BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "../../buff/Buff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSearchEnemy(extras) {
    _reporterNs.report("SearchEnemy", "../../ai/SearchEnemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPowers(extras) {
    _reporterNs.report("SkillPowers", "../../../power/SkillPowers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "../../../power/powerTab/EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTriggerMap(extras) {
    _reporterNs.report("SkillTriggerMap", "../../skill/SkillTriggerMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../../../data/FightAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "../../damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageSource(extras) {
    _reporterNs.report("DamageSource", "../../damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../../frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTimePush(extras) {
    _reporterNs.report("SkillTimePush", "../../skill/SkillTimePush", _context.meta, extras);
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
      AbsObjInfo = _unresolved_2.AbsObjInfo;
      AbsObjInfoAttr = _unresolved_2.AbsObjInfoAttr;
    }, function (_unresolved_3) {
      AbsStateType = _unresolved_3.AbsStateType;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      BulletControl = _unresolved_5.BulletControl;
    }, function (_unresolved_6) {
      SkillControl = _unresolved_6.SkillControl;
    }, function (_unresolved_7) {
      SkillTriggerControl = _unresolved_7.SkillTriggerControl;
    }, function (_unresolved_8) {
      AbsObjType = _unresolved_8.AbsObjType;
    }, function (_unresolved_9) {
      BuffControl = _unresolved_9.BuffControl;
    }, function (_unresolved_10) {
      SearchEnemy = _unresolved_10.SearchEnemy;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_unresolved_12) {
      FightEvent = _unresolved_12.FightEvent;
    }, function (_unresolved_13) {
      SkillPowers = _unresolved_13.SkillPowers;
    }, function (_unresolved_14) {
      SkillTriggerMap = _unresolved_14.SkillTriggerMap;
    }, function (_unresolved_15) {
      FightAttrData = _unresolved_15.FightAttrData;
    }, function (_unresolved_16) {
      DamageSource = _unresolved_16.DamageSource;
    }, function (_unresolved_17) {
      FightMacro = _unresolved_17.FightMacro;
    }, function (_unresolved_18) {
      FrameControl = _unresolved_18.FrameControl;
    }, function (_unresolved_19) {
      SkillTimePush = _unresolved_19.SkillTimePush;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de6e5yI0TNJ9qQTeW9mj8LX", "AbsRoleInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AbsRoleInfo", AbsRoleInfo = (_dec = ccclass('AbsRoleInfo'), _dec(_class = class AbsRoleInfo extends (_crd && AbsObjInfo === void 0 ? (_reportPossibleCrUseOfAbsObjInfo({
        error: Error()
      }), AbsObjInfo) : AbsObjInfo) {
        constructor() {
          super();
          this.objType = (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role;
          this.abs = void 0;

          /** 自动战斗 */
          this.isAudo = true;
          this.isLeader = false;

          /** 携带的技能 */
          this.takeSkills = [];
          this.skillGroupMap = new Map();

          /** 普通技能 */
          this._normalGroup = void 0;

          /** 武器技能（肉鸽招式） */
          this._weaponeGroup = void 0;

          /** buff相关 */
          this.buffs = [];

          /** buff检测 （生命变更） */
          this.checkBuffs = [];

          /** 战斗属性 */
          this.attrData = new (_crd && FightAttrData === void 0 ? (_reportPossibleCrUseOfFightAttrData({
            error: Error()
          }), FightAttrData) : FightAttrData)();
          this.skillPowers = void 0;
          this.triggerMap = void 0;
          this.levelEffects = [];
          this.skillTimePush = new (_crd && SkillTimePush === void 0 ? (_reportPossibleCrUseOfSkillTimePush({
            error: Error()
          }), SkillTimePush) : SkillTimePush)();
          this.attrData.changeCallback(this.attrChange.bind(this));
          this.skillPowers = new (_crd && SkillPowers === void 0 ? (_reportPossibleCrUseOfSkillPowers({
            error: Error()
          }), SkillPowers) : SkillPowers)();
          this.triggerMap = new (_crd && SkillTriggerMap === void 0 ? (_reportPossibleCrUseOfSkillTriggerMap({
            error: Error()
          }), SkillTriggerMap) : SkillTriggerMap)();
        }

        init() {
          this.attrData.init();
          this.skillTimePush.setAbsInfo(this);
        }

        setAudo(audo) {
          this.isAudo = audo;
        }

        reset() {
          this.skillTimePush.clear();
          this.attrData.clear();
          this.skillPowers.clear();
          this.triggerMap.clear();
          this.removeBuffAll();
          this.buffs.length = 0;
          this.checkBuffs.length = 0;
          this.levelEffects.length = 0;
          this.takeSkills.length = 0;
          super.reset();
        } //---------------属性相关-------------------


        setAttrList(list) {
          for (var index = 0; index < list.length; index++) {
            var v = list[index];
            var num = void 0;

            if (typeof v.value == "number") {
              num = v.value;
            } else {
              num = v.value.toNumber();
            }

            this.attrData.addAttr(v.type, num);
          }
        }

        attrChange(attrType, value) {
          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Stealth) {
            this.checkStealth();
          }

          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Vertigo) {
            this.checkVertigo();
          }

          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalHp || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_ShieldLimit) {
            if (this.abs) {
              this.abs.updateHP();
            }
          }
        }
        /** 被命中 受到伤害前 */


        beHitFront(bullet) {
          this.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_BeHitFront);
        }
        /** 被命中 命中伤害 */


        onHitDamage(data) {
          if (this.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Invincible)) {
            // console.log("无敌中0")
            return;
          }

          if (data.damage == 0) {
            return;
          }

          var lossHpPer = 0;

          if (data.isDamage()) {
            var subHp = 0;

            if (data.isSelfDamage) {
              //自损
              subHp = data.damage;
            } else {
              if (this.attrData.shield >= data.damage) {
                //护盾足够
                this.attrData.shield -= data.damage;
              } else {
                subHp = data.damage - this.attrData.shield;
                this.attrData.shield = 0; //护盾清零
              }
            }

            this.attrData.hp -= subHp;
            lossHpPer = Math.floor(data.damage / this.attrData.maxHp * (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT);
          } else {
            if (data.isShield) {
              //增加护盾值
              this.attrData.shield += data.damage;
            } else {
              this.attrData.hp += data.damage;
            }
          } //百分比掉血， 不允许掉死


          this.attrData.hp = Math.max(Math.min(this.attrData.hp, this.attrData.maxHp), data.isPerSubHeal ? 1 : 0);
          this.abs.updateHP();
          this.addObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
            error: Error()
          }), AbsObjInfoAttr) : AbsObjInfoAttr).EverylHpLostPe, lossHpPer);
          this.addObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
            error: Error()
          }), AbsObjInfoAttr) : AbsObjInfoAttr).totalLossHpPer, lossHpPer);
          this.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_TotalLostHp, {
            lossHpPer: lossHpPer
          });
          this.checkAttrBuff(lossHpPer);

          if (data.isDamage() && data.damage > 0) {
            this.onInjured(data);
          }

          this.checkDeak();
        }
        /** 受伤 */


        onInjured(data) {
          if (data.source == (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
            error: Error()
          }), DamageSource) : DamageSource).bullet) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Injured, data, this);
            var param = {};

            if (data.sourceObjId) {
              var sourceRole = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                error: Error()
              }), FrameControl) : FrameControl).ins.getObjById(data.sourceObjId);

              if (sourceRole && !sourceRole.isDead) {
                param.otherAbsInfo = sourceRole.info;
              }
            }

            this.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Triggertype.Triggertype_BeHit, param, true);
            this.checkRemoveBuff((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ClearType.ClearType_BeDamaged);
          }
        }
        /** 被命中  受到伤害后 */


        beHitBack(bullet) {
          (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
            error: Error()
          }), BulletControl) : BulletControl).ins.checkHitEffect(bullet, this.abs);

          if (!this.abs.isDead) {
            (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
              error: Error()
            }), BuffControl) : BuffControl).ins.checkBulletAddBuff(bullet, bullet.owner, this.abs);
          }

          this.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_BeHitBack);
        }

        checkDeak() {
          if (this.attrData.hp <= 0) {
            this.abs.onDead();
          }
        }

        onRevice() {
          this.normalFillUp();
          this.attrData.fullHp();
        } //---------------技能相关-------------------


        createSkillGroup(id) {
          var skillGroup = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_SkillGroupTable, id);
          skillGroup.clearAttrData();
          return skillGroup;
        }

        addTakeSkill(skill, isUse) {
          if (this.mutualExclusionBySkill(skill) != 1) {
            this.takeSkills.push(skill);

            if (isUse) {
              this.usePassiveSkill(skill);
            }

            return true;
          } else {
            console.log("添加技能---互斥，丢弃", skill.Id);
            return false;
          }
        }
        /** 根据技能获取是否互斥 */


        mutualExclusionBySkill(skill) {
          var mutualType = 0; //1互斥 skill丢弃，  2优先 skill放入

          for (var index = this.takeSkills.length - 1; index >= 0; index--) {
            var tmpSkill = this.takeSkills[index];

            if (tmpSkill.SkillConflict[0] && skill.SkillConflict[0] == tmpSkill.SkillConflict[0]) {
              if (skill.SkillConflict[1] > tmpSkill.SkillConflict[1]) {
                mutualType = 2;
                this.takeSkills.splice(index, 1);
              } else {
                if (mutualType == 0) {
                  mutualType = 1;
                }
              }
            }
          }

          return mutualType;
        }

        initTriggerMap() {
          this.triggerMap.clear();
          this.useAllPassiveSkill();
        }
        /** 释放所有被动技能 (被动技能在初始化完成后直接释放) */


        useAllPassiveSkill() {
          for (var index = 0; index < this.takeSkills.length; index++) {
            var v = this.takeSkills[index];
            this.usePassiveSkill(v);
          }

          this.useSkillGroupPassive(this.normalGroup);
        }

        useSkillGroupPassive(skillGroup) {
          if (!skillGroup) {
            return;
          }

          for (var index = 0; index < skillGroup.skills.length; index++) {
            var v = skillGroup.skills[index];
            this.usePassiveSkill(v);
          }
        }

        usePassiveSkill(skill) {
          skill.initCd();

          if (skill.isPassiveSkill() || skill.isTimePush()) {
            (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
              error: Error()
            }), SkillControl) : SkillControl).ins.useSkillAndBullet(skill, this.abs);

            if (skill.isTimePush()) {
              this.skillTimePush.addSkill(skill);
            }
          }
        }
        /** 普通技能组 */


        get normalGroup() {
          if (this._normalGroup == null) {
            this._normalGroup = this.skillGroupMap.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttackType.AttackType_Attack);
          }

          return this._normalGroup;
        }
        /** 武器技能组（肉鸽招式） */


        get weaponeGroup() {
          if (this._weaponeGroup == null) {
            this._weaponeGroup = this.skillGroupMap.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttackType.AttackType_ActionAttack);
          }

          return this._weaponeGroup;
        }
        /** 删除当前技能组 */


        removeNowSkillGroup() {
          if (this.normalGroup) {
            this.normalGroup.clearAttrData();
          }

          this._normalGroup = null;
          this.skillGroupMap.delete((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack);
        }
        /** 切换技能组 */


        switchSkillGroup(skillGroup) {
          this.removeNowSkillGroup();
          this.skillGroupMap.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack, skillGroup);
          this.normalGroup.clearAttrData();
          this.useSkillGroupPassive(this.normalGroup);
        }
        /** 添加武器技能组（招式) */


        addWeaponSkillGroup(skillGroup) {
          this.skillGroupMap.set((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_ActionAttack, skillGroup);
          this._weaponeGroup = skillGroup;
          skillGroup.clearAttrData();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Role_Add_Weapon_SkillGroup, this, skillGroup.Id);
          this.useSkillGroupPassive(skillGroup);
        }

        getNowSkill() {
          if (this.normalGroup) {
            return this.normalGroup.nowSkill;
          }
        }

        normalFillUp() {
          if (this.normalGroup) {
            this.normalGroup.fillUp();
          }
        }
        /** 减去普通攻击次数 */


        subNormalAttack(count) {
          this.subAttackByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack, count);
        }

        addNormalAttackCount(count) {
          this.normalGroup.addAttackCount(count);
        }

        getNormalAttackAnimId() {}
        /** 检测普通攻击是否cd */


        checkNormalCd() {
          return this.checkSkillCd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack);
        }

        subAttackByType(skillType, count) {
          if (skillType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack) {
            this.normalGroup.subAttack(count);
          } else {
            this.weaponeGroup.subAttack(count);
          }
        }

        checkSkillCd(skillType) {
          if (skillType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack) {
            return this.normalGroup.checkSkillCD();
          } else {
            return this.weaponeGroup && this.weaponeGroup.checkSkillCD();
          }
        }
        /** 刷新蓄力时间 */


        refreshHoldTime() {
          this.setObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
            error: Error()
          }), AbsObjInfoAttr) : AbsObjInfoAttr).holdTime);
        }

        updateFrame(dt) {
          this.updateFrameBuff(dt);

          if (this.abs && this.abs.isActive && !this.abs.isDead) {
            this.skillTimePush.check();
          }
        } //---------------技能触发器相关 主要处理都在SkillControll-------------------

        /** 技能触发器 */


        onSkillTrigger(type, parms, checkDeak) {
          if (type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_PreAttack) {
            this.normalGroup.nextNormalSkill();
          }

          if (checkDeak && this.abs.isDead) {
            return;
          }

          (_crd && SkillTriggerControl === void 0 ? (_reportPossibleCrUseOfSkillTriggerControl({
            error: Error()
          }), SkillTriggerControl) : SkillTriggerControl).ins.onSkillTrigger(this, type, parms);
        } //---------------BUFF相关-------------------


        updateFrameBuff(dt) {
          for (var index = this.buffs.length - 1; index >= 0; index--) {
            var v = this.buffs[index];

            if (v == null) {
              this.buffs.splice(index, 1);
              continue;
            }

            if (!v.isValid()) {
              this.removeBuff(v, index);
              continue;
            }

            v.updateFrame(dt);
          }
        }
        /** 检测属性buff */


        checkAttrBuff(lossHpPer) {
          for (var index = 0; index < this.checkBuffs.length; index++) {
            var v = this.checkBuffs[index];
            v.checkAttr(lossHpPer);
          }
        }
        /** 根据id和添加者id获取buff */


        getBuff(buffId, addObjId) {
          for (var index = 0; index < this.buffs.length; index++) {
            var v = this.buffs[index];

            if (v.buffId == buffId && v.addOwner.objId == addObjId) {
              return v;
            }
          }

          return null;
        }
        /** 根据buff组获取buff */


        getBuffByGroup(buffGroup) {
          for (var index = 0; index < this.buffs.length; index++) {
            var v = this.buffs[index];

            if (buffGroup && v.configTab.BuffGroup == buffGroup) {
              return v;
            }
          }

          return null;
        }
        /** 获取buff组层数 */


        getBuffGroupTotalCount(buffGroup) {
          var count = 0;

          for (var index = 0; index < this.buffs.length; index++) {
            var v = this.buffs[index];

            if (buffGroup && v.configTab.BuffGroup == buffGroup) {
              count += v.ruleNumber;
            }
          }

          return count;
        }
        /** 获取buffId层数 */


        getBuffIdTotalCount(buffId) {
          var count = 0;

          for (var index = 0; index < this.buffs.length; index++) {
            var v = this.buffs[index];

            if (v.buffId == buffId) {
              count += v.ruleNumber;
            }
          }

          return count;
        }
        /** 根据清除类型检测清除buff */


        checkRemoveBuff(clearType) {
          for (var index = this.buffs.length - 1; index >= 0; index--) {
            var v = this.buffs[index];

            if (v.isClearByType(clearType)) {
              this.removeBuff(v, index);
            }
          }
        } //** 根据buff类型清除buff */


        checkRemoveBuffType(buffType) {
          for (var index = this.buffs.length - 1; index >= 0; index--) {
            var v = this.buffs[index];

            if (v.isBuffType(buffType)) {
              this.removeBuff(v, index);
            }
          }
        }

        removeBuffId(buffId) {
          for (var index = this.buffs.length - 1; index >= 0; index--) {
            var v = this.buffs[index];

            if (v.buffId == buffId) {
              this.removeBuff(v, index);
            }
          }
        }

        removeBuffAll() {
          for (var index = this.buffs.length - 1; index >= 0; index--) {
            var v = this.buffs[index];
            this.removeBuff(v, index);
          }

          this.buffs.length = 0;
          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.showTransferDamageUI();
        }

        pushBuff(buff) {
          this.buffs.push(buff);

          if (buff.configTab.isCheckAttr()) {
            this.checkBuffs.push(buff);
          }
        }

        spliceBuff(buff, index) {
          this.buffs.splice(index, 1);

          if (buff.configTab.isCheckAttr()) {
            var checkIndex = this.checkBuffs.findIndex(v => buff);

            if (checkIndex >= 0) {
              this.checkBuffs.splice(checkIndex, 1);
            }
          }
        }

        addBuff(buff) {
          buff.setObjId(this.abs.objId);
          this.pushBuff(buff);
          buff.addRuleNumber(true);
          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.addBuffEffectUI(buff, this.abs);
          /** 先放进去， 在触发第一次 */

          buff.onTrigger();
        }

        removeBuff(buff, index) {
          this.spliceBuff(buff, index); // console.log(this.abs.getBodyId(), "移除buff", buff.buffId)

          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.removeBuffEffectUI(buff, this.abs);

          if (!buff.isValid() && !this.isRecycle) {
            this.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Triggertype.Triggertype_BuffExpiration, {
              buff: buff
            });
          }

          buff.removeAttr();
          buff.recycle();
        }
        /** 查找指定属性类型的buff */


        findBuffByBuffGroup(buffGroup) {
          for (var index = 0; index < this.buffs.length; index++) {
            var v = this.buffs[index];

            if (v.configTab.isBuffGroup(buffGroup)) {
              return true;
            }
          }

          return false;
        }
        /** 是否 负面buff免疫  */


        isNegativeBuffImmunity() {
          return this.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_NegativeBuffImmunity) > 0;
        } //---------------其他-------------------


        checkSkillGroupUse(atkType) {
          var skill;

          if (atkType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack) {
            skill = this.getNowSkill();
          } else {
            skill = this.weaponeGroup.nowSkill;
          }

          if (skill && !skill.isInCD(this.attrData)) {
            if (this.checkSkillEffectUnit(skill) || this.checSkillBulletEffectUnit(skill)) {
              return true;
            }
          }

          return false;
        }
        /** 检测技能作用到位 作用目标*/


        checkSkillEffectUnit(skill) {
          return (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
            error: Error()
          }), SearchEnemy) : SearchEnemy).isHasEnemy(this.abs, this.abs.objType, skill.EffectUnit);
        }
        /** 检测技能子弹 作用目标 */


        checSkillBulletEffectUnit(skill) {
          if (skill.bulletTab) {
            return (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
              error: Error()
            }), SearchEnemy) : SearchEnemy).isHasEnemy(this.abs, this.abs.objType, skill.bulletTab.EffectUnit);
          }

          return false;
        }

        useWeaponSkill(targetPos) {} //---------------effect属性增加-------------------


        addEffect(effectTab) {
          this.attrData.addAttr(effectTab.EffectType, effectTab.parm);
        }

        removeEffect(effectTab) {
          this.attrData.addAttr(effectTab.EffectType, -effectTab.parm);
        }

        checkStealth() {
          if (this.abs && !this.abs.isDead) {
            this.abs.setStealth(this.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Stealth) > 0);
          }
        }

        checkVertigo() {
          if (this.abs && !this.abs.isDead) {
            var bool = this.isVertigo();

            if (bool) {
              if (!this.abs.isState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
                error: Error()
              }), AbsStateType) : AbsStateType).RoleVertigo)) {
                if (this.abs.isState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
                  error: Error()
                }), AbsStateType) : AbsStateType).RoleSkillCd)) {
                  //调息状态， 不切换到眩晕状态
                  return;
                }

                this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
                  error: Error()
                }), AbsStateType) : AbsStateType).RoleVertigo);
              }
            } else {
              if (this.abs.isState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
                error: Error()
              }), AbsStateType) : AbsStateType).RoleVertigo)) {
                this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
                  error: Error()
                }), AbsStateType) : AbsStateType).roleIdle);
              }
            }
          }
        }

        onBorn() {
          this.attrData.fullHp();
          this.refreshHoldTime();
          this.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_Born);
        } //是否无敌


        isInvincible() {
          if (this.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Invincible)) {
            // console.log("无敌中0")
            return true;
          }

          return false;
        }
        /** 是否眩晕 */


        isVertigo() {
          return this.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Vertigo) > 0;
        }

        getLevel() {
          return 1;
        }
        /** boss怪 */


        get isBoss() {
          return false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32a4d2dec47fd120642d2fdff938fe3dfcc1bf0b.js.map