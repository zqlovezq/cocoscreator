System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, PowerTabFactory, FightData, _dec, _class, _crd, ccclass, property, SkillPowers;

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "./powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "./powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "./powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "./powerTab/EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTab(extras) {
    _reporterNs.report("BulletTab", "./powerTab/BulletTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTriggerTab(extras) {
    _reporterNs.report("SkillTriggerTab", "./powerTab/SkillTriggerTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./powerTab/PowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerTabFactory(extras) {
    _reporterNs.report("PowerTabFactory", "./PowerTabFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
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
      PowerTabFactory = _unresolved_3.PowerTabFactory;
    }, function (_unresolved_4) {
      FightData = _unresolved_4.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad6d2Lwn2dPp6kachPU/m3G", "SkillPowers", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 技能增强存储 
       * 进入战场时，会把英雄身上所有可能产生增强的都存储下来
       * 具体xxxTab会是同一份数据， 引用传递
       * 
       * 全局技能、rogue都放在FightRoot内
      */

      _export("SkillPowers", SkillPowers = (_dec = ccclass('SkillPowers'), _dec(_class = class SkillPowers {
        constructor() {
          this.skillGroups = [];
          // 技能组 
          this.skills = [];
          // 技能 
          this.buffs = [];
          // buff 
          this.effects = [];
          // 效果 
          this.bullets = [];
          // 子弹 
          this.triggers = [];
        }

        // 触发器 
        insertItem(powerBase) {
          var list = this.getData(powerBase.powerType);
          list.push(powerBase);
        }

        addPower(_data, find) {
          var dd = this.getDataById(_data.PowerType, _data.PowerId);

          if (dd == null && find) {
            dd = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).ins.skillPowers.getDataById(_data.PowerType, _data.PowerId);
          }

          if (dd) {
            dd.addPower(_data);
          }
        }

        insertData(type, data) {
          switch (type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillGroupTable:
              this.skillGroups.push(data);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable:
              this.skills.push(data);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BuffTable:
              this.buffs.push(data);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_EffectTable:
              this.effects.push(data);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable:
              this.bullets.push(data);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_TriggerTable:
              this.triggers.push(data);
              break;
          }
        }

        getData(type) {
          switch (type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillGroupTable:
              return this.skillGroups;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable:
              return this.skills;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BuffTable:
              return this.buffs;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_EffectTable:
              return this.effects;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable:
              return this.bullets;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_TriggerTable:
              return this.triggers;
          }

          return [];
        }

        getDataById(powerType, id) {
          var list = this.getData(powerType);
          var len = list.length;
          var v;

          for (var index = 0; index < len; index++) {
            v = list[index];

            if (v.configId == id) {
              return v;
            }
          }

          return null;
        }

        createTypeAnyId(powerType, id) {
          var data = this.getDataById(powerType, id);

          if (data == null) {
            data = (_crd && PowerTabFactory === void 0 ? (_reportPossibleCrUseOfPowerTabFactory({
              error: Error()
            }), PowerTabFactory) : PowerTabFactory).createType(powerType);
            data.setParentPowers(this);
            data.setConfigId(id);
          }

          return data;
        }

        clear() {
          this.skillGroups.length = 0;
          this.skills.length = 0;
          this.buffs.length = 0;
          this.effects.length = 0;
          this.bullets.length = 0;
          this.triggers.length = 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=270a019195c7b53fe27de8161d9726070645ab77.js.map