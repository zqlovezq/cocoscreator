System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, Buff, Random, tab, BuffUI, FightRootControl, DamageCalculation, PlayerControl, EventMgr, FightEvent, DamageData, DamageSource, DamageLab, DamageStatisticsData, FightMacro, FrameControl, RevoltCheatControl, BuffControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "./Buff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../obj/bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffUI(extras) {
    _reporterNs.report("BuffUI", "./BuffUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageCalculation(extras) {
    _reporterNs.report("DamageCalculation", "../damage/DamageCalculation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "../../power/powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsOwner(extras) {
    _reporterNs.report("AbsOwner", "../obj/AbsOwner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "../damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageSource(extras) {
    _reporterNs.report("DamageSource", "../damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../obj/role/AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../obj/role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageLab(extras) {
    _reporterNs.report("DamageLab", "../damage/DamageLab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageStatisticsData(extras) {
    _reporterNs.report("DamageStatisticsData", "../damage/DamageStatisticsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRevoltCheatControl(extras) {
    _reporterNs.report("RevoltCheatControl", "../../cheat/RevoltCheatControl", _context.meta, extras);
  }

  _export("BuffControl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      Buff = _unresolved_3.Buff;
    }, function (_unresolved_4) {
      Random = _unresolved_4.Random;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      BuffUI = _unresolved_6.BuffUI;
    }, function (_unresolved_7) {
      FightRootControl = _unresolved_7.FightRootControl;
    }, function (_unresolved_8) {
      DamageCalculation = _unresolved_8.DamageCalculation;
    }, function (_unresolved_9) {
      PlayerControl = _unresolved_9.PlayerControl;
    }, function (_unresolved_10) {
      EventMgr = _unresolved_10.EventMgr;
    }, function (_unresolved_11) {
      FightEvent = _unresolved_11.FightEvent;
    }, function (_unresolved_12) {
      DamageData = _unresolved_12.DamageData;
      DamageSource = _unresolved_12.DamageSource;
    }, function (_unresolved_13) {
      DamageLab = _unresolved_13.DamageLab;
    }, function (_unresolved_14) {
      DamageStatisticsData = _unresolved_14.DamageStatisticsData;
    }, function (_unresolved_15) {
      FightMacro = _unresolved_15.FightMacro;
    }, function (_unresolved_16) {
      FrameControl = _unresolved_16.FrameControl;
    }, function (_unresolved_17) {
      RevoltCheatControl = _unresolved_17.RevoltCheatControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec14bjHqflMXJOFjtd6em4F", "BuffControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'macro', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuffControl", BuffControl = class BuffControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.poolUis = new Map();
          this.soleId = 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new BuffControl();
          }

          return this._instance;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Injured, this.onInjured, this);
        }

        init() {
          this.register();
          this.poolUis.clear();
        }
        /** 自增组id */


        addSelfSoleId() {
          this.soleId++;
          return this.soleId;
        }

        checkSkillAddBuff(skill, attack, enemys) {
          if (skill.isHasBuff()) {
            let buffTab;
            let buffChance = 0;
            let isSuccess = false;

            for (let index = 0; index < skill.AddBuff.length; index++) {
              buffTab = skill.addBuffTabs[index];
              buffChance = skill.AddBuffChance[index] || 0;
              isSuccess = this.checkChanceAddBuff(buffTab, buffChance);

              if (isSuccess) {
                enemys.forEach(enemy => {
                  this.addBuff(buffTab, attack.objId, enemy);
                });
              }
            }
          }
        }

        checkBulletAddBuff(bullet, owner, defanseAbs) {
          if (bullet.info.isHasAddBuff()) {
            let buffTab;
            let buffChance = 0;
            let isSuccess = false;

            for (let index = 0; index < bullet.info.configTab.AddBuff.length; index++) {
              buffTab = bullet.info.configTab.addBuffTabs[index];
              buffChance = bullet.info.configTab.AddBuffChance[index] || 0;
              isSuccess = this.checkChanceAddBuff(buffTab, buffChance);

              if (isSuccess) {
                this.addBuff(buffTab, owner.objId, defanseAbs);
              }
            }
          }
        }
        /** 检测概率是否成功 */


        checkChanceAddBuff(buffTab, chance) {
          //增加概率
          return (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).isSuccess(chance);
        }

        addBuff(buffTab, addObjId, absRole) {
          if (buffTab == null || buffTab.Id == null || (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.isExitIng) {
            return;
          }

          if ((_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjById(addObjId) == null) {
            console.log("buff来源已死亡"); //怪物策划（李奇硕，buff来源死亡，buff不生效）

            return;
          }

          if (buffTab.BuffType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuffType.BuffType_Loss) {
            // 减益  判定负面buff免疫
            if (absRole.info.isNegativeBuffImmunity()) {
              console.log("负面buff免疫");
              return;
            }
          }

          let buff;

          if (buffTab.Rule == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Rule.Rule_SingleCount) {
            //独立计数， 特殊处理
            let total = 0;

            if (buffTab.BuffGroup) {
              total = absRole.info.getBuffGroupTotalCount(buffTab.BuffGroup);
            } else {
              total = absRole.info.getBuffIdTotalCount(buffTab.Id);
            }

            if (buffTab.Number && total >= buffTab.Number) {
              console.log("buff独立计数已满足");
              return;
            }
          } else {
            //判断是否是组buff
            if (buffTab.BuffGroup) {
              buff = absRole.info.getBuffByGroup(buffTab.BuffGroup);
            } else {
              buff = absRole.info.getBuff(buffTab.Id, addObjId);
            }
          }

          if (buff == null) {
            //添加buff
            buff = (_crd && Buff === void 0 ? (_reportPossibleCrUseOfBuff({
              error: Error()
            }), Buff) : Buff).get();
            buff.setBuffTab(buffTab);
            buff.soleId = this.addSelfSoleId();
            buff.addObjId(addObjId);
            buff.init();
            absRole.info.addBuff(buff);
            (_crd && RevoltCheatControl === void 0 ? (_reportPossibleCrUseOfRevoltCheatControl({
              error: Error()
            }), RevoltCheatControl) : RevoltCheatControl).ins.addBuff(absRole, buff);
            this.buffToTrigger(buff);
          } else {
            if (buff.isCanRule()) {
              // console.log(absRole.getBodyId(), "叠加buff", buffTab.Id)
              buff.addRuleNumber(false);
              buff.disposeRule();
              (_crd && RevoltCheatControl === void 0 ? (_reportPossibleCrUseOfRevoltCheatControl({
                error: Error()
              }), RevoltCheatControl) : RevoltCheatControl).ins.addBuff(absRole, buff);
              this.buffToTrigger(buff);
            } else if (buff.isClearByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ClearType.ClearType_StackFull)) {
              absRole.info.removeBuffId(buff.buffId); // console.log(absRole.getBodyId(), "buff不可叠加", buffTab.Id)
            }
          }

          if (buff && buff.isValid() && buff.configTab && buff.configTab.isBuffGroup((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuffGroup.BuffGroup_RolesBuffLayerNum)) {
            this.onRolesBuffLayerNum(buff);
          }
        }

        buffToTrigger(buff) {
          if (buff && buff.isValid()) {
            let addRole = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjById(buff.addOwner.objId);
            let ownerRole = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
              error: Error()
            }), FrameControl) : FrameControl).ins.getObjById(buff.owner.objId);

            if (addRole && ownerRole) {
              addRole.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Triggertype.Triggertype_AddBuff, {
                otherAbsInfo: ownerRole.info,
                buff: buff
              });
            }
          }
        }

        removeBuffs(buffIds, absRole) {
          for (let index = 0; index < buffIds.length; index++) {
            const v = buffIds[index];
            absRole.info.removeBuffId(v);
          }
        }

        removeBuffType(buffType, absRole) {
          absRole.info.removeBuffId(buffType);
        }

        addBuffEffectUI(buff, absRole) {
          if (buff.configTab.VFXID) {
            //一人身上多个施法者产生同一个buffId, 只显示一个特效，做显示数量
            let buffUi = this.getBuffUI(absRole, buff.buffId);

            if (buffUi == null) {
              buffUi = (_crd && BuffUI === void 0 ? (_reportPossibleCrUseOfBuffUI({
                error: Error()
              }), BuffUI) : BuffUI).get();

              if ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).isEffectShowBelow(buff.configTab.VFXID)) {
                (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
                  error: Error()
                }), FightRootControl) : FightRootControl).ins.getRootView().roleDown.addChild(buffUi.node);
              } else {
                if (absRole && absRole.isRole()) {
                  absRole.node.addChild(buffUi.node);
                } else {
                  (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
                    error: Error()
                  }), FightRootControl) : FightRootControl).ins.getRootView().roleUp.addChild(buffUi.node);
                }
              }

              buffUi.setBuff(buff.buffId, absRole);
              this.pushBuffUI(absRole, buffUi);
            }

            buffUi.addCount();
          }

          if (buff.configTab.isBuffGroup((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuffGroup.BuffGroup_TransferDamage)) {
            this.showTransferDamageUI();
          }
        }

        removeBuffEffectUI(buff, absRole) {
          (_crd && RevoltCheatControl === void 0 ? (_reportPossibleCrUseOfRevoltCheatControl({
            error: Error()
          }), RevoltCheatControl) : RevoltCheatControl).ins.removeBuff(absRole, buff);

          if (buff.configTab.VFXID) {
            let list = this.getBuffUIsById(absRole);

            for (let index = 0; index < list.length; index++) {
              const v = list[index];

              if (v.buffId == buff.buffId) {
                v.totalCount -= 1;

                if (v.totalCount <= 0) {
                  v.recycle();
                  list.splice(index, 1);
                  break;
                }
              }
            }
          }

          if (buff.configTab.isBuffGroup((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BuffGroup.BuffGroup_TransferDamage)) {
            this.showTransferDamageUI();
          }
        }

        showTransferDamageUI() {
          let tdList = this.getTransferDamageGroup();

          if (tdList.length > 0) {}

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).buff_link, tdList);
        }

        getTransferDamageGroup() {
          let roles = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getRoles();
          let tdList = [];

          for (let index = 0; index < roles.length; index++) {
            const v = roles[index];

            if (v.isActive && !v.isDead && v.info.findBuffByBuffGroup((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuffGroup.BuffGroup_TransferDamage)) {
              tdList.push(v);
            }
          }

          return tdList;
        }

        onRolesBuffLayerNum(buff) {
          let absRole = buff.owner.abs;

          if (absRole.isRole()) {
            let maxNum = this.getBuffNumByObjType(absRole.objType, buff.configTab.BuffGroup);

            if (maxNum > 0) {
              let allRole = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
                error: Error()
              }), FrameControl) : FrameControl).ins.getObjList(absRole.objType);
              let tempBuff;

              for (let index = 0; index < allRole.length; index++) {
                const tmpRole = allRole[index];
                tempBuff = tmpRole.info.getBuffByGroup(buff.configTab.BuffGroup);

                if (tempBuff == null) {
                  this.addBuff(buff.configTab, buff.addOwner.objId, tmpRole);
                  tempBuff = tmpRole.info.getBuffByGroup(buff.configTab.BuffGroup);
                } //buff已添加，做层级


                if (tempBuff && maxNum > tempBuff.ruleNumber) {
                  let diff = maxNum - tempBuff.ruleNumber;

                  for (let j = 0; j < diff; j++) {
                    tempBuff.addRuleNumber(false);
                    tempBuff.disposeRule();
                  }
                }
              } // for (let index = 0; index < allRole.length; index++) {
              //     const absRole = allRole[index];
              //     tempBuff = absRole.info.getBuffByGroup(buff.configTab.BuffGroup)
              //     console.log("每一人曾数：",tempBuff.ruleNumber)
              // }

            } // console.log("buff最大层数-----", maxNum)

          }
        }

        getBuffNumByObjTypeAndBuffId(objType, buffId) {
          let buffTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuffTableById.getValue(buffId);

          if (buffTab) {
            return this.getBuffNumByObjType(objType, buffTab.BuffGroup);
          }

          return 0;
        }

        getBuffNumByObjType(objType, buffGroup) {
          let allRole = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjList(objType);
          let num = 0; //先获取到当前最大层数

          let buff;
          allRole.forEach(e => {
            buff = e.info.getBuffByGroup(buffGroup);

            if (buff && buff.ruleNumber > num) {
              num = buff.ruleNumber;
            }
          });
          return num;
        }

        pushBuffUI(abs, buffUI) {
          this.getBuffUIsById(abs).push(buffUI);
        }

        getBuffUIsById(abs) {
          let list = this.poolUis.get(abs.getBodyId());

          if (list == null) {
            list = [];
            this.poolUis.set(abs.getBodyId(), list);
          }

          return list;
        }

        getBuffUI(abs, buffId) {
          let list = this.getBuffUIsById(abs);

          for (let index = 0; index < list.length; index++) {
            let ui = list[index];

            if (ui.buffId == buffId) {
              return ui;
            }
          }

          return null;
        }
        /** buff触发效果 */


        onTriggerEffect(buff) {
          let ownerAbs = buff.owner.abs;

          if (ownerAbs == null || ownerAbs && (ownerAbs.isDead || !ownerAbs.isActive || ownerAbs.info == null)) {
            return;
          }

          if (buff.configTab == null || buff.configTab.effectTabs == null) {
            console.log("buff触发效果", buff);
            return;
          }

          let len = buff.configTab.addBuffTabs.length;

          if (len) {
            for (let index = 0; index < buff.configTab.addBuffTabs.length; index++) {
              if (buff.configTab == null) {
                break;
              }

              const v = buff.configTab.addBuffTabs[index];

              if (buff.buffId == v.Id) {
                console.log("buff触发添加buff死循环------", v);
                return;
              } // console.log("buff触发添加buff", v)


              this.addBuff(v, buff.configTab.addBuffObjType == 1 ? buff.addOwner.objId : buff.owner.objId, buff.owner.abs);
            }
          } // console.log("buff触发效果", buff.configTab.effectTabs)


          len = buff.configTab.effectTabs.length;

          for (let index = 0; index < len; index++) {
            if (buff.configTab == null) {
              break;
            }

            const eff = buff.configTab.effectTabs[index];

            switch (eff.EffectType) {
              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_AttackHeal:
                (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                  error: Error()
                }), DamageCalculation) : DamageCalculation).buff_AttackHeal(buff, index, eff);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_BigHpHeal:
                (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                  error: Error()
                }), DamageCalculation) : DamageCalculation).buff_BigHpHeal(buff, index, eff);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_BigHpLoss:
                (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                  error: Error()
                }), DamageCalculation) : DamageCalculation).buff_BigHpSubHeal(buff, index, eff);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_NowHpHeal:
                (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                  error: Error()
                }), DamageCalculation) : DamageCalculation).buff_NowHpSubHeal(buff, index, eff);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_TearEffect:
                (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                  error: Error()
                }), DamageCalculation) : DamageCalculation).buff_TearEffect(buff, index, eff);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_AttackShield:
                (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                  error: Error()
                }), DamageCalculation) : DamageCalculation).buff_AttackShield(buff, index, eff);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_BigHpShield:
                (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                  error: Error()
                }), DamageCalculation) : DamageCalculation).buff_BigHpShield(buff, index, eff);
                break;
            }
          }
        }

        onInjured(data, absRoleInfo) {
          if (data.isTransferDamage) {
            return;
          } //身上有链伤buff


          if (absRoleInfo.abs && absRoleInfo.abs.isRole()) {
            if (absRoleInfo.findBuffByBuffGroup((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BuffGroup.BuffGroup_TransferDamage)) {
              let tdList = this.getTransferDamageGroup();

              if (tdList.length > 1) {
                for (let index = 0; index < tdList.length; index++) {
                  const v = tdList[index];

                  if (absRoleInfo.abs != v && v.isActive && !v.isDead) {
                    let copyData = (_crd && DamageData === void 0 ? (_reportPossibleCrUseOfDamageData({
                      error: Error()
                    }), DamageData) : DamageData).copy(data);
                    copyData.source = (_crd && DamageSource === void 0 ? (_reportPossibleCrUseOfDamageSource({
                      error: Error()
                    }), DamageSource) : DamageSource).buff;
                    copyData.isTransferDamage = true;
                    (_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
                      error: Error()
                    }), DamageStatisticsData) : DamageStatisticsData).ins.addBuffTransferDamage(v, copyData);
                    v.info.onHitDamage(copyData);
                    (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
                      error: Error()
                    }), DamageLab) : DamageLab).addShowDamageNum(copyData, v);
                  }
                }
              }
            }
          }
        }

      });

      BuffControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0361045d58d179e3cf76c1899c90decfc0f1f04d.js.map