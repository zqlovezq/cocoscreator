System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, tab, EventMgr, FightEvent, FightGainBuffControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../base/obj/role/role/Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../base/obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../base/obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../power/powerTab/SkillTab", _context.meta, extras);
  }

  _export("FightGainBuffControl", void 0);

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
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      FightEvent = _unresolved_5.FightEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4cabethu1FFnKgGVEM20UTJ", "FightGainBuffControl", undefined);

      __checkObsolete__(['_decorator']); // import { RogueControl } from "../view/rogue/RogueControl";


      ({
        ccclass,
        property
      } = _decorator);
      /** 战场增益buff */

      _export("FightGainBuffControl", FightGainBuffControl = class FightGainBuffControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.gainMap = new Map();
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new FightGainBuffControl();
          }

          return this._instance;
        }

        purge() {
          this.gainMap.clear();
        }

        init() {
          this.purge();
        }

        initRegister() {
          this.register();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start_Complete, this.onFight_Start_Complete, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Select_leader, this.onSelect_leader, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).checkAbsRoleGainBuff, this.oncheckAbsRoleGainBuff, this);
        }

        onFight_Start_Complete() {
          //处理进场送rogueid
          let gainList = this.getListByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectTarget.EffectTarget_Rogue);

          for (let i = 0; i < gainList.length; i++) {
            let conf = gainList[i];

            for (let index = 0; index < conf.CorrespondingId.length; index++) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent).giveRogue, conf.CorrespondingId[index]);
            }
          }
        }

        onSelect_leader(leaderRole) {
          let list = this.getListByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectTarget.EffectTarget_Hero);

          if (list.length > 0) {
            for (let index = 0; index < list.length; index++) {
              const v = list[index];

              if (v.Own == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OwnClass.OwnClass_TeamLeader) {
                this.gainAbsRole(leaderRole, v);
              }
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).checkHeroUp, leaderRole);
        }

        oncheckAbsRoleGainBuff(absRole) {
          if (absRole.isRole()) {
            this.inRole(absRole);
          } else if (absRole.isMonster()) {
            this.inMonster(absRole);
          }
        }

        addIds(ids) {
          ids.forEach(id => {
            this.addId(id);
          });
        }

        addId(id) {
          let conf = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageBuffTableById.getValue(id);

          if (conf) {
            let list = this.getListByType(conf.EffectTarget);
            list.push(conf);
          }
        }

        hasType(type) {
          return this.gainMap.has(type);
        }

        getListByType(type) {
          if (!this.hasType(type)) {
            this.gainMap.set(type, []);
          }

          return this.gainMap.get(type);
        }
        /** 是否有指定类型的对应id */


        hasTypeAndCorrespondingId(type, id) {
          let list = this.getListByType(type);

          for (let index = 0; index < list.length; index++) {
            const v = list[index];

            for (let j = 0; j < v.CorrespondingId.length; j++) {
              const vid = v.CorrespondingId[j];

              if (vid == id) {
                return true;
              }
            }
          }

          return false;
        } // /**
        //  * 
        //  * @param role 角色
        //  */


        inRole(role) {
          let list = this.getListByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectTarget.EffectTarget_Hero);

          if (list.length > 0) {
            for (let index = 0; index < list.length; index++) {
              const v = list[index];

              if (v.Own == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OwnClass.OwnClass_TeamLeader) {
                //队长在选择完英雄后，事件内处理
                continue;
              }

              let heroClass = this.ownClassToHeroClass(v.Own);

              if (v.Own == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OwnClass.OwnClass_All) {
                this.gainAbsRole(role, v);
              } else if (role.info.isHeroClass(heroClass)) {
                this.gainAbsRole(role, v);
              }
            }
          }
        }

        inMonster(monster) {
          let list = this.getListByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectTarget.EffectTarget_Monster);

          if (list.length > 0) {
            for (let index = 0; index < list.length; index++) {
              const v = list[index];

              if (v.Own == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OwnClass.OwnClass_All) {
                this.gainAbsRole(monster, v);
              }
            }
          }
        }

        gainAbsRole(absRole, conf) {
          // console.log("增益", absRole, conf)
          for (let index = 0; index < conf.CorrespondingId.length; index++) {
            const v = conf.CorrespondingId[index];
            let skillTab = absRole.info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable, v);
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).addSkill, skillTab, absRole);
          }
        }

        ownClassToHeroClass(own) {
          switch (own) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_All:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Any;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Assassin:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Assassin;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Archer:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Archer;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Priest:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Priest;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Caster:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Caster;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OwnClass.OwnClass_Warrior:
              return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).HeroClass.HeroClass_Warrior;
          }

          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Max;
        }

      });

      FightGainBuffControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99a23f1048514bee5f8945717733356084c1e156.js.map