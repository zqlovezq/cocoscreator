System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsRoleInfo, tab, AbsObjType, WorldBossControll, FightData, Sound, _dec, _class, _crd, ccclass, property, MonsterInfo;

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "../../../../power/powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "../../../damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorldBossControll(extras) {
    _reporterNs.report("WorldBossControll", "../../../../stage/WorldBossControll", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "../../../../../utils/Sound", _context.meta, extras);
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
      AbsObjType = _unresolved_4.AbsObjType;
    }, function (_unresolved_5) {
      WorldBossControll = _unresolved_5.WorldBossControll;
    }, function (_unresolved_6) {
      FightData = _unresolved_6.FightData;
    }, function (_unresolved_7) {
      Sound = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8cb22iVTOdFGaht/vgiE+S+", "MonsterInfo", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterInfo", MonsterInfo = (_dec = ccclass('MonsterInfo'), _dec(_class = class MonsterInfo extends (_crd && AbsRoleInfo === void 0 ? (_reportPossibleCrUseOfAbsRoleInfo({
        error: Error()
      }), AbsRoleInfo) : AbsRoleInfo) {
        constructor() {
          super(...arguments);
          this.objType = (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy;
          this.configTab = void 0;
          this.speed = 0;
          this.exp = 0;
          this.drop = 0;

          /** 总承受伤害 */
          this.totalTackDamage = 0;
        }

        setConfigId(id) {
          this.reset();
          super.setConfigId(id);
          this.setConfigTab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MonsterTableById.getValue(id));
          this._normalGroup = this.createSkillGroup(0);
          this.normalGroup.setMonsterSkillIds(this.configTab.SkillIds);
        }
        /** 攻击范围 */


        get attackRange() {
          return this.configTab.AttackRange;
        }
        /** boss怪 */


        get isBoss() {
          return this.configTab.MonsterType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MonsterType.MonsterType_BossMonster;
        }
        /** 精英怪 */


        get isEliteMonster() {
          return this.configTab.MonsterType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MonsterType.MonsterType_EliteMonster;
        }
        /** 被命中 命中伤害 */


        onHitDamage(data) {
          super.onHitDamage(data);

          if (this.isBoss && data.isDamage()) {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.isWorldAndGuildBoss()) {
              (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
                error: Error()
              }), WorldBossControll) : WorldBossControll).ins.addWorldBossTackDamage(data.damage);
            }
          }
        }

        checkDeak() {
          if (this.attrData.hp <= 0) {
            (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
              error: Error()
            }), Sound) : Sound).ins.PlayHitEffect(this.configTab.MonsterDieSound);
          }

          super.checkDeak();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2c102ce096223489a587d5efd0875f55463368e.js.map