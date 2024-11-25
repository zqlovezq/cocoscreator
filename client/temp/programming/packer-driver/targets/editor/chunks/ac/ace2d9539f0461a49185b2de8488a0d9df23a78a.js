System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, tab, EventMgr, FightEvent, FrameControl, AbsObjType, FightData, PowerTabFactory, EffectControl, Func, WorldPontTab, WorldBossControll, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
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

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../base/frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../base/obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../base/obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerTabFactory(extras) {
    _reporterNs.report("PowerTabFactory", "../power/PowerTabFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "../power/powerTab/EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectControl(extras) {
    _reporterNs.report("EffectControl", "../base/effect/EffectControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  _export({
    WorldPontTab: void 0,
    WorldBossControll: void 0
  });

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
    }, function (_unresolved_6) {
      FrameControl = _unresolved_6.FrameControl;
    }, function (_unresolved_7) {
      AbsObjType = _unresolved_7.AbsObjType;
    }, function (_unresolved_8) {
      FightData = _unresolved_8.FightData;
    }, function (_unresolved_9) {
      PowerTabFactory = _unresolved_9.PowerTabFactory;
    }, function (_unresolved_10) {
      EffectControl = _unresolved_10.EffectControl;
    }, function (_unresolved_11) {
      Func = _unresolved_11.Func;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22a777ccxxJd6ssFDK9mYUP", "WorldBossControll", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WorldPontTab", WorldPontTab = class WorldPontTab {
        constructor() {
          this.Id = void 0;
          // ID 
          this.StageId = void 0;
          // 关卡ID 
          this.Damage = void 0;
          // 伤害值 
          this.PointRaito = void 0;
        } //积分比例


      });

      _export("WorldBossControll", WorldBossControll = class WorldBossControll extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.totalTackDamage = 0;
          this.maxHp = 0;
          this.lastHp = 0;
          this.upHp = 0;
          this.nowLv = 0;
          this.absBoss = null;
          this.tabs = [];
          this.nowBuffLv = 0;
          this.buffMaxHp = 0;
          this.buffTabs = [];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new WorldBossControll();
          }

          return this._instance;
        }

        init() {
          this.register();
          this.totalTackDamage = 0;
          this.maxHp = 0;
          this.nowLv = 0;
          this.absBoss = null;
          this.tabs.length = 0;
          this.nowBuffLv = 0;
          this.buffMaxHp = 0;
          this.buffTabs.length = 0;

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorlBoss()) {
            for (let index = 0; index < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().WorldBossRewardTable.length; index++) {
              const v = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().WorldBossRewardTable[index];

              if (v.StageId == (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageId) {
                let tempTab = new (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).GuildBossPointTable();
                tempTab = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                  error: Error()
                }), Func) : Func).copyTab(v, tempTab);
                tempTab.PointRaito = 1;
                this.tabs.push(tempTab);
              }
            }
          } else {
            for (let index = 0; index < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildBossPointTable.length; index++) {
              const v = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GuildBossPointTable[index];

              if (v.StageId == (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).ins.stageId) {
                this.tabs.push(v);
              }
            }
          }

          for (let index = 0; index < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().WorldBossDamTable.length; index++) {
            const v = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().WorldBossDamTable[index];

            if (v.StageId == (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.stageId) {
              this.buffTabs.push(v);
            }
          }

          this.setNowDamage();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Boss_Enter, this.onBoss_Enter, this);
        }

        onBoss_Enter() {
          let list = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy);

          for (let index = 0; index < list.length; index++) {
            const v = list[index];

            if (v.info && v.info.isBoss) {
              this.absBoss = v;
            }
          }
        }

        setNowDamage() {
          if (this.totalTackDamage >= this.maxHp) {
            this.checkLv();
          }

          if (this.totalTackDamage >= this.buffMaxHp) {
            this.checkBuffLv();
          }
        }

        addWorldBossTackDamage(damage) {
          this.totalTackDamage += damage;
          this.setNowDamage();
        }

        damagePercent() {
          return (this.totalTackDamage - this.lastHp) / this.upHp;
        }

        checkLv() {
          let isUp = false;

          for (let index = this.nowLv; index < this.tabs.length; index++) {
            const v = this.tabs[index];

            if (this.totalTackDamage >= v.Damage) {
              this.nowLv = v.Id;
              this.lastHp = v.Damage;
              isUp = true;
            } else {
              this.maxHp = v.Damage;
              break;
            }
          }

          this.upHp = this.maxHp - this.lastHp;

          if (isUp) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).World_Boss_LvUp);
          }
        }

        checkBuffLv() {
          let isUp = false;

          for (let index = this.nowBuffLv; index < this.buffTabs.length; index++) {
            const v = this.buffTabs[index];

            if (this.totalTackDamage >= v.Damage) {
              this.nowBuffLv = index;
              this.addEffect(v.EffectId);
            } else {
              this.buffMaxHp = v.Damage;
              break;
            }
          }
        }

        addEffect(effectIds) {
          for (let index = 0; index < effectIds.length; index++) {
            const effectId = effectIds[index];
            let eff = (_crd && PowerTabFactory === void 0 ? (_reportPossibleCrUseOfPowerTabFactory({
              error: Error()
            }), PowerTabFactory) : PowerTabFactory).createType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_EffectTable);
            eff.setConfigId(effectId);
            console.log("添加世界boss特效", effectId);
            eff.random();
            (_crd && EffectControl === void 0 ? (_reportPossibleCrUseOfEffectControl({
              error: Error()
            }), EffectControl) : EffectControl).ins.addEffect(eff, this.absBoss, this.absBoss);
          }
        }

        showResult() {}

      });

      WorldBossControll._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ace2d9539f0461a49185b2de8488a0d9df23a78a.js.map