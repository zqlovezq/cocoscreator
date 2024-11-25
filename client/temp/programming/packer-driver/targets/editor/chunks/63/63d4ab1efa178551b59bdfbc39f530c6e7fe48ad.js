System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, FightMacro, DamageLab, tab, PrdType, Random, Fixed, DamageData, DamageSource, DamageStatisticsData, PowerTabFactory, DamageCalculation, _crd, ccclass, property, testList, triggerConditions;

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../obj/bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "../buff/Buff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageLab(extras) {
    _reporterNs.report("DamageLab", "./DamageLab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "../../power/powerTab/EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../../data/FightAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrdType(extras) {
    _reporterNs.report("PrdType", "../../data/FightAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixed(extras) {
    _reporterNs.report("Fixed", "../../../../framework/collision/Fixed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "./DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageSource(extras) {
    _reporterNs.report("DamageSource", "./DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageStatisticsData(extras) {
    _reporterNs.report("DamageStatisticsData", "./DamageStatisticsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "../../power/powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerTabFactory(extras) {
    _reporterNs.report("PowerTabFactory", "../../power/PowerTabFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletInfo(extras) {
    _reporterNs.report("BulletInfo", "../obj/bullet/BulletInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../obj/role/AbsRoleInfo", _context.meta, extras);
  }

  _export("DamageCalculation", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      FightMacro = _unresolved_2.FightMacro;
    }, function (_unresolved_3) {
      DamageLab = _unresolved_3.DamageLab;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      PrdType = _unresolved_5.PrdType;
    }, function (_unresolved_6) {
      Random = _unresolved_6.Random;
    }, function (_unresolved_7) {
      Fixed = _unresolved_7.default;
    }, function (_unresolved_8) {
      DamageData = _unresolved_8.DamageData;
      DamageSource = _unresolved_8.DamageSource;
    }, function (_unresolved_9) {
      DamageStatisticsData = _unresolved_9.DamageStatisticsData;
    }, function (_unresolved_10) {
      PowerTabFactory = _unresolved_10.PowerTabFactory;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64bfYL29JK1ZHhzqbBN/RX", "DamageCalculation", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'math', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      testList = [];
      triggerConditions = [];
      /** 伤害计算 */

      _export("DamageCalculation", DamageCalculation = class DamageCalculation {
        static init() {
          this.a = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightDefConstant;
          this.b = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightDefHeroLevelConstant;
          this.c = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightDefHeroStarConstant;
          this.x = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightCriticalPointTop;
          this.y = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightCriticalCurvature;
          this.z = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightCriticalInflection;
          this.kDamege = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightBaseThumpDamage;
          this.vertigoBuffId = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().FightBaseVertigo;
          (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).splitConfig();
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.init();
        } //-------------------伤害计算--------------

        /**
         * 伤害计算
         * @param bullet 子弹
         * @param defanseAbs 防御者
         */


        static bullet_damageCalculate(bullet, defanseAbs, damageAmount) {
          if (defanseAbs.isDead) {
            return;
          }

          let bulletTab = bullet.info.configTab;
          let attack = bullet.owner.abs;
          let attackAttrData = bullet.owner.getAttrData();
          let defanseAttrData = defanseAbs.info.attrData;

          if (attackAttrData == null) {
            console.log("子弹来源为空", bullet, bullet.owner);
          }

          if (defanseAttrData == null) {
            console.log("子弹命中角色属性为空", defanseAbs, bullet);
          }

          attackAttrData.toStrong();
          defanseAttrData.toStrong(); //是否会心

          let isCritical = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).isSuccess(this.calculateCritical(attackAttrData, bullet)); //是否暴击

          let isCriticalPoint = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).isSuccess(this.calculateCriticalPointPer(attackAttrData, defanseAttrData, attack, defanseAbs));

          if (isCritical) {
            attackAttrData.clearPrdCount((_crd && PrdType === void 0 ? (_reportPossibleCrUseOfPrdType({
              error: Error()
            }), PrdType) : PrdType).CriticalEffect);
          } else {
            attackAttrData.addPrdCount((_crd && PrdType === void 0 ? (_reportPossibleCrUseOfPrdType({
              error: Error()
            }), PrdType) : PrdType).CriticalEffect);
          }

          if (isCriticalPoint) {
            attackAttrData.clearPrdCount((_crd && PrdType === void 0 ? (_reportPossibleCrUseOfPrdType({
              error: Error()
            }), PrdType) : PrdType).CriticalPerEffect);
          } else {
            attackAttrData.addPrdCount((_crd && PrdType === void 0 ? (_reportPossibleCrUseOfPrdType({
              error: Error()
            }), PrdType) : PrdType).CriticalPerEffect);
          } //设置人物属性，会心、暴击


          attackAttrData.setAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalEffect, isCritical ? 1 : 0);
          attackAttrData.setAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalPerEffect, isCriticalPoint ? 1 : 0); //设置人物属性，被会心、被暴击

          defanseAttrData.setAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BeCriticalEffect, isCritical ? 1 : 0);
          defanseAttrData.setAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BeCriticalPerEffect, isCriticalPoint ? 1 : 0); //攻击者 伤害计算 触发器

          if (attack && attack.info) {
            attack.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Triggertype.Triggertype_HarmTest, {
              otherAbsInfo: defanseAbs.info
            });
          } //被攻击者 伤害计算 触发器


          defanseAbs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_HarmTest, {
            otherAbsInfo: attack && attack.info
          });
          let atk = attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack);
          let deduceDamage = this.calculateDeduceDamage(attackAttrData, defanseAttrData);
          let bulletDamageScale = this.calculatebulletDamageScale(attackAttrData, bullet.info);
          let baseDamage = atk * (1 - deduceDamage) * bulletDamageScale / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("基础伤害后", baseDamage, "---", atk, deduceDamage, bulletDamageScale)

          if (isCritical) {
            baseDamage = baseDamage * (this.kDamege + attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_CriticalDamageAdd)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("会心伤害后", baseDamage, "---", attackAttrData.getAttr(tab.AttrType.AttrType_CriticalDamageAdd))
          }

          if (isCriticalPoint) {
            baseDamage = baseDamage * this.calculateCriticalPointDamage(attackAttrData, defanseAttrData) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("暴击伤害后", baseDamage, "---", this.calculateCriticalPointDamage(attackAttrData, defanseAttrData))
          }

          baseDamage = baseDamage * this.calculateDamageadd(attackAttrData, defanseAttrData, attack, defanseAbs, bullet) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("伤害加成后", baseDamage, "---", this.calculateDamageadd(attackAttrData, defanseAttrData,attack, defanseAbs) / FightMacro.PERCENT)
          //伤害计算-损失生命比例 触发器

          triggerConditions.length = 0;
          triggerConditions.push((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).TriggerCondition.TriggerCondition_HpLostPer);
          let lossHpPer = Math.floor(baseDamage / defanseAttrData.maxHp * (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT);
          defanseAbs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_HarmTest, {
            conditions: triggerConditions,
            otherAbsInfo: attack && attack.info,
            damage: baseDamage,
            lossHpPer: lossHpPer
          });
          baseDamage = baseDamage * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_FinalDamage) - defanseAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_FinalDamageReduce)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("最终伤害后", baseDamage, "---", attackAttrData.getAttr(tab.AttrType.AttrType_FinalDamage), defanseAttrData.getAttr(tab.AttrType.AttrType_FinalDamageReduce))

          baseDamage = baseDamage * this.calculateDamageResult(attackAttrData, defanseAttrData, attack, defanseAbs) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;

          if (bulletTab.SameLow) {
            //同组子弹伤害衰减
            if (defanseAbs.checkBulletDamageGroup(bullet.info.groupId)) {
              baseDamage = baseDamage * bulletTab.SameLow / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT;
            }
          } //清除会心、暴击标记


          attackAttrData.clearAttrByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalEffect);
          attackAttrData.clearAttrByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BeCriticalEffect);
          defanseAttrData.clearAttrByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalPerEffect);
          defanseAttrData.clearAttrByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BeCriticalPerEffect);
          defanseAbs.addDamegeGroupId(bullet.info.groupId);
          bullet.addHavaDamageObjId(defanseAbs.objId);
          baseDamage = Math.max((_crd && Fixed === void 0 ? (_reportPossibleCrUseOfFixed({
            error: Error()
          }), Fixed) : Fixed).toFixed(baseDamage), 0);
          let damageData = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).get();
          damageData.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
            error: Error()
          }), DamageSource) : DamageSource).bullet;
          damageData.damage = baseDamage;
          damageData.isCritical = isCritical;
          damageData.isCriticalPoint = isCriticalPoint;
          damageData.sourceObjId = bullet.owner.objId;

          if (damageAmount == 0) {
            //计算眩晕
            let isVertigo = (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
              error: Error()
            }), Random) : Random).isSuccess(attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_VertigoPer));

            if (isVertigo) {
              if (attack) {
                damageData.addBuffTab = attack.info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_BuffTable, this.vertigoBuffId);
              } else {
                if (this.vertigoBuffTab == null) {
                  let buffTab = (_crd && PowerTabFactory === void 0 ? (_reportPossibleCrUseOfPowerTabFactory({
                    error: Error()
                  }), PowerTabFactory) : PowerTabFactory).createType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).PowerType.PowerType_BuffTable);
                  buffTab.setConfigId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().GetKeyValue_ConfigTable().FightBaseVertigo);
                  this.vertigoBuffTab = buffTab;
                }

                damageData.addBuffTab = this.vertigoBuffTab;
              }
            }
          } //移除buff


          if (attack && attack.info) {
            attack.info.checkRemoveBuff((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ClearType.ClearType_BulletMadeDamage);
            damageData.isCritical && attack.info.checkRemoveBuff((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ClearType.ClearType_DeadlyDamage);
            damageData.isCriticalPoint && attack.info.checkRemoveBuff((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ClearType.ClearType_CriticalDamage);
          }

          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBulletDamage(bullet, attack, defanseAbs, damageData);
          return damageData;
        }
        /**
         * 伤害计算
         * @param bullet 子弹
         * @param defanseAbs 防御者
         */


        static bullet_damageCalculate1(bullet, defanseAbs) {
          if (defanseAbs.isDead) {
            return;
          }
        }
        /** 计算子弹系数 */


        static calculatebulletDamageScale(attackAttrData, bulletInfo) {
          let num = bulletInfo.DamageScale * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BulletSpeed)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          DamageCalculation.print("计算子弹系数", num, "---", bulletInfo.DamageScale, attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BulletSpeed));
          return num;
        }
        /** 计算会心率 */


        static calculateCritical(attackAttrData, bullet) {
          let num = attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Critical);
          let bulletAdd = 0;

          for (let index = 0; index < bullet.info.configTab.addEffectTab.length; index++) {
            const v = bullet.info.configTab.addEffectTab[index];

            if (v.EffectType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_Critical) {
              bulletAdd += v.Parameters[0] || 0;
            }
          }

          DamageCalculation.print("计算暴击率", num, "---", attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Critical), bulletAdd);
          let newNum = num * (attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalTimes) + (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + bulletAdd; // console.log("会心率",newNum,attackAttrData.getPrdCount(PrdType.CriticalEffect),Random.CFromP(newNum) * attackAttrData.getPrdCount(PrdType.CriticalEffect))

          return (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).CFromP(newNum) * attackAttrData.getPrdCount((_crd && PrdType === void 0 ? (_reportPossibleCrUseOfPrdType({
            error: Error()
          }), PrdType) : PrdType).CriticalEffect);
        }
        /** 计算暴击率 */


        static calculateCriticalPointPer(attackAttrData, defanseAttrData, attack, defanseAbs) {
          // let num = (attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPoint) - defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalPoint)) / this.k * 100 + attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPer)
          let aSubb = attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalPoint) - defanseAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_ResistCriticalPoint);
          let parm1 = this.x * this.y * aSubb / (this.y * aSubb + this.z) * 100 + attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalPer);
          parm1 = this.ModifyLogicParameter(attack, parm1, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_CriticalPer, defanseAbs);
          return parm1; // DamageCalculation.print("计算暴击率", num, "---", attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPoint), defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalPoint), attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPer))
          // console.log("计算暴击率",parm1,attackAttrData.getPrdCount(PrdType.CriticalPerEffect),Random.CFromP(parm1) * attackAttrData.getPrdCount(PrdType.CriticalPerEffect))
          // return Random.CFromP(parm1) * attackAttrData.getPrdCount(PrdType.CriticalPerEffect)
        }
        /** 计算暴击伤害 */


        static calculateCriticalPointDamage(attackAttrData, defanseAttrData) {
          //10000 + 伤害增加（攻） + 目标生命比例增伤（攻） - 伤害减少（防）
          let num = attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_CriticalDamage) - defanseAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_ResistCriticalDamage); // DamageCalculation.print("计算暴击伤害", num, "---", attackAttrData.getAttr(tab.AttrType.AttrType_CriticalDamage), defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalDamage))

          return num;
        }
        /** 计算伤害加成 */


        static calculateDamageadd(attackAttrData, defanseAttrData, attack, defanseAbs, bullet) {
          let damageAdd = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamageAdd);

          if (defanseAbs && defanseAbs.info.isBoss) {
            damageAdd += attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_BossDamageAdd);
          }

          let bulletAdd = 0;

          for (let index = 0; index < bullet.info.configTab.addEffectTab.length; index++) {
            const v = bullet.info.configTab.addEffectTab[index];

            if (v.EffectType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_DamageAdd) {
              bulletAdd += v.Parameters[0] || 0;
            }
          }

          damageAdd += bulletAdd;
          damageAdd = this.ModifyLogicParameter(attack, damageAdd, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_DamageAdd, defanseAbs);
          let DamageReduce = defanseAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamageReduce);
          DamageReduce = this.ModifyLogicParameter(defanseAbs, DamageReduce, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_DamageReduce, null);
          let num = damageAdd + this.calculateHpPerDamageAdd(attackAttrData, defanseAttrData, attack, defanseAbs) - DamageReduce; // DamageCalculation.print("计算伤害加成", num, "---", attackAttrData.getAttr(tab.AttrType.AttrType_DamageAdd), this.calculateHpPerDamageAdd(attackAttrData, defanseAttrData), defanseAttrData.getAttr(tab.AttrType.AttrType_DamageReduce))

          return num;
        }
        /** 计算伤害结果  */


        static calculateDamageResult(attackAttrData, defanseAttrData, attack, defanseAbs) {
          let DamageResult = attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamageResult);
          DamageResult = this.ModifyLogicParameter(attack, DamageResult, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_DamageResult, defanseAbs);
          let DamageResultReduce = defanseAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamageResultReduce);
          DamageResultReduce = this.ModifyLogicParameter(defanseAbs, DamageResultReduce, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_DamageResultReduce, null);
          let num = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + DamageResult - DamageResultReduce;
          return num;
        }
        /** 触发器， 参数计算变更 */


        static ModifyLogicParameter(absRole, baseNum, triggerType, defanseAbs) {
          if (absRole && absRole.info) {
            let dd = {
              otherAbsInfo: defanseAbs && defanseAbs.info,
              baseNum: baseNum
            };
            absRole.info.onSkillTrigger(triggerType, dd);

            if (baseNum != dd.baseNum) {
              // console.log(triggerType, "触发器，公式增加变更---old:", baseNum, "new:", dd.baseNum)
              baseNum = dd.baseNum;
            }
          }

          return baseNum;
        }
        /** 计算生命比例伤害增加 */


        static calculateHpPerDamageAdd(attackAttrData, defanseAttrData, attack, defanseAbs) {
          let targetHpDamageAdd = attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TargetHpDamageAdd);
          targetHpDamageAdd = this.ModifyLogicParameter(attack, targetHpDamageAdd, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_TargetHpDamageAdd, defanseAbs);
          let num = defanseAttrData.hp / defanseAttrData.maxHp * targetHpDamageAdd; // DamageCalculation.print("计算生命比例伤害增加", num, "---", attackAttrData.hp, attackAttrData.maxHp, attackAttrData.getAttr(tab.AttrType.AttrType_TargetHpDamageAdd))

          return num;
        }
        /** 计算减伤 */


        static calculateDeduceDamage(attackAttrData, defanseAttrData) {
          let defanse = Math.max((defanseAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalDefence) - attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BreakDefenceFixed)) * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT - (attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_BreakDefencePer) - defanseAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Block))) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT * (((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT - attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_IgnorePer)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT), 0); // DamageCalculation.print("计算防御", defanse, "---", defanseAttrData.getAttr(tab.AttrType.AttrType_TotalDefence), attackAttrData.getAttr(tab.AttrType.AttrType_BreakDefenceFixed), attackAttrData.getAttr(tab.AttrType.AttrType_BreakDefencePer), defanseAttrData.getAttr(tab.AttrType.AttrType_Block))

          let num = defanse / (this.a + this.b * attackAttrData.level + this.c * attackAttrData.star + defanse + attackAttrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamageReduceCoefficientFix)); // DamageCalculation.print("计算减伤", num, "---", defanse, attackAttrData.level, attackAttrData.star)

          return num;
        }
        /** 攻击治疗  */


        static buff_AttackHeal(buff, index, effect) {
          let addHp = buff.addOwner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack) * effect.parm / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + buff.addOwner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HealDeep)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("计算攻击治疗", addHp, "---", buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_TotalAttack), effect.parm, buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_HealDeep))

          addHp = Math.floor(addHp);
          let data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).get();
          data.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
            error: Error()
          }), DamageSource) : DamageSource).buff;
          data.damage = addHp;
          data.isHeal = true;
          data.sourceObjId = buff.owner.objId;
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data);
          let abs = buff.owner.abs;
          abs.info.onHitDamage(data);
          this.HpHealShield(data, abs.info);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(data, abs, 0);
        }
        /** 最大生命百分比回血  */


        static buff_BigHpHeal(buff, index, effect) {
          let data = buff.lockParm;

          if (data == null) {
            let addHp = buff.owner.getAttrData().maxHp * effect.parm / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("计算最大生命百分比回血", addHp, "---", buff.owner.getAttrData().maxHp, effect.parm)

            addHp = Math.floor(addHp);
            data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
              error: Error()
            }), DamageData) : DamageData).get();
            data.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
              error: Error()
            }), DamageSource) : DamageSource).buff;
            data.damage = addHp;
            data.isHealPer = true;
            data.sourceObjId = buff.owner.objId;
          }

          buff.lockParm = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).copy(data);
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data);
          let abs = buff.owner.abs;
          abs.info.onHitDamage(data);
          this.HpHealShield(data, abs.info);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(data, abs, 0);
        }
        /** 生命回复增加护盾 */


        static HpHealShield(hpDamageData, absRoleInfo) {
          let data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).get();
          data.source = hpDamageData.source;
          data.damage = hpDamageData.damage * (absRoleInfo.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HpHealShieldPer) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + absRoleInfo.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_ShieldDeep)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT);
          data.damage = Math.floor(data.damage);
          data.isShield = true;
          data.sourceObjId = absRoleInfo.abs.objId;
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(null, absRoleInfo.abs, absRoleInfo.abs, data);
          absRoleInfo.onHitDamage(data);
        }
        /** 当前生命百分比掉血   */


        static buff_NowHpSubHeal(buff, index, effect) {
          let data = buff.lockParm;
          let abs = buff.owner.abs; // if (data == null) {

          let nowHp = abs.info.attrData.hp;
          let addHp = nowHp * effect.parm / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("计算当前生命百分比掉血", addHp, "---", buff.addOwner.getAttrData().hp, effect.parm)

          addHp = Math.floor(addHp);
          data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).get();
          data.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
            error: Error()
          }), DamageSource) : DamageSource).buff;
          data.damage = addHp;
          data.isPerSubHeal = true;
          data.isSelfDamage = buff.addOwner.objId == buff.owner.objId;
          data.sourceObjId = buff.owner.objId; // }
          // buff.lockParm = DamageData.copy(data)

          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data);
          abs.info.onHitDamage(data);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(data, abs, 0);
        }
        /** 最大生命百分比掉血   */


        static buff_BigHpSubHeal(buff, index, effect) {
          let data = buff.lockParm;

          if (data == null) {
            let addHp = buff.owner.getAttrData().maxHp * effect.parm / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT; // DamageCalculation.print("计算最大生命百分比掉血", addHp, "---", buff.addOwner.getAttrData().maxHp, effect.parm)

            addHp = Math.floor(addHp);
            data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
              error: Error()
            }), DamageData) : DamageData).get();
            data.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
              error: Error()
            }), DamageSource) : DamageSource).buff;
            data.damage = addHp;
            data.isPerSubHeal = true;
            data.isSelfDamage = buff.addOwner.objId == buff.owner.objId;
            data.sourceObjId = buff.owner.objId;
          }

          buff.lockParm = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).copy(data);
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data);
          let abs = buff.owner.abs;
          abs.info.onHitDamage(data);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(data, abs, 0);
        }
        /** 撕裂（流血）   */


        static buff_TearEffect(buff, index, effect) {
          let atk = buff.addOwner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack);
          let tearPer = buff.addOwner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_AttackTear) * (((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + buff.addOwner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TearCoe)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT);
          let tearAdd = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + buff.addOwner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TearDeep);
          let addHp = atk * tearPer / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT * tearAdd / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          addHp = Math.floor(addHp); // DamageCalculation.print("计算撕裂", addHp, "---", atk, tearPer, tearAdd)

          let data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).get();
          data.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
            error: Error()
          }), DamageSource) : DamageSource).buff;
          data.damage = addHp;
          data.isTear = true;
          data.sourceObjId = buff.owner.objId;
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data);
          let abs = buff.owner.abs;
          abs.info.onHitDamage(data);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(data, abs, 0);
        }
        /** 攻击护盾  */


        static buff_AttackShield(buff, index, effect) {
          let addHp = buff.addOwner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack) * effect.parm / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + buff.owner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_ShieldDeep)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          addHp = Math.floor(addHp);
          let data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).get();
          data.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
            error: Error()
          }), DamageSource) : DamageSource).buff;
          data.damage = addHp;
          data.isShield = true;
          data.sourceObjId = buff.owner.objId;
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data);
          let abs = buff.owner.abs;
          abs.info.onHitDamage(data);
        }
        /** 最大生命护盾  */


        static buff_BigHpShield(buff, index, effect) {
          let data = buff.lockParm;

          if (data == null) {
            let addHp = buff.owner.getAttrData().maxHp * effect.Parameters[0] / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT + buff.owner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_ShieldDeep)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT;
            addHp = Math.floor(addHp);
            data = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
              error: Error()
            }), DamageData) : DamageData).get();
            data.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
              error: Error()
            }), DamageSource) : DamageSource).buff;
            data.damage = addHp;
            data.isShield = true;
            data.sourceObjId = buff.owner.objId;
          }

          buff.lockParm = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
            error: Error()
          }), DamageData) : DamageData).copy(data);
          (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
            error: Error()
          }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data);
          let abs = buff.owner.abs;
          abs.info.onHitDamage(data);
        }

        static print(...args) {// console.log(...args)
        }

      });

      /** 战斗公式文档内， 4个常数 */
      DamageCalculation.a = void 0;
      DamageCalculation.b = void 0;
      DamageCalculation.c = void 0;
      DamageCalculation.x = void 0;
      DamageCalculation.y = void 0;
      DamageCalculation.z = void 0;
      DamageCalculation.kDamege = void 0;
      //会心伤害
      DamageCalculation.vertigoBuffId = void 0;
      DamageCalculation.vertigoBuffTab = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63d4ab1efa178551b59bdfbc39f530c6e7fe48ad.js.map