System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, js, Label, Node, ProgressBar, ToggleContainer, ViewPop, FightRoleTeam, FightWeaponTeam, HeroFightInfo, Func, PlayerHeadItem, SimpleRoleInfo, tab, LangMgr, GameUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, BattleMainRecordPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRoleTeam(extras) {
    _reporterNs.report("FightRoleTeam", "../../../fight/view/common/FightRoleTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightWeaponTeam(extras) {
    _reporterNs.report("FightWeaponTeam", "../../../fight/view/common/FightWeaponTeam", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroFightInfo(extras) {
    _reporterNs.report("HeroFightInfo", "../../../fight/data/HeroFightInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleRoleInfo(extras) {
    _reporterNs.report("SimpleRoleInfo", "../../friends/SimpleRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      js = _cc.js;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      ToggleContainer = _cc.ToggleContainer;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      FightRoleTeam = _unresolved_3.FightRoleTeam;
    }, function (_unresolved_4) {
      FightWeaponTeam = _unresolved_4.FightWeaponTeam;
    }, function (_unresolved_5) {
      HeroFightInfo = _unresolved_5.HeroFightInfo;
    }, function (_unresolved_6) {
      Func = _unresolved_6.Func;
    }, function (_unresolved_7) {
      PlayerHeadItem = _unresolved_7.PlayerHeadItem;
    }, function (_unresolved_8) {
      SimpleRoleInfo = _unresolved_8.SimpleRoleInfo;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }, function (_unresolved_11) {
      GameUtil = _unresolved_11.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7dbbavJYVNPeK9A/VlzjJCO", "BattleMainRecordPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'js', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Toggle', 'ToggleContainer', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleMainRecordPop", BattleMainRecordPop = (_dec = ccclass('BattleMainRecordPop'), _dec2 = property(ToggleContainer), _dec3 = property(Node), _dec4 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(_crd && FightRoleTeam === void 0 ? (_reportPossibleCrUseOfFightRoleTeam({
        error: Error()
      }), FightRoleTeam) : FightRoleTeam), _dec9 = property(_crd && FightWeaponTeam === void 0 ? (_reportPossibleCrUseOfFightWeaponTeam({
        error: Error()
      }), FightWeaponTeam) : FightWeaponTeam), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class BattleMainRecordPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "toggleContainer", _descriptor, this);

          _initializerDefineProperty(this, "info_node", _descriptor2, this);

          _initializerDefineProperty(this, "headItem", _descriptor3, this);

          _initializerDefineProperty(this, "name_txt", _descriptor4, this);

          _initializerDefineProperty(this, "power_txt", _descriptor5, this);

          _initializerDefineProperty(this, "gate_txt", _descriptor6, this);

          _initializerDefineProperty(this, "fightTeam", _descriptor7, this);

          _initializerDefineProperty(this, "fightWeapon", _descriptor8, this);

          _initializerDefineProperty(this, "fightDamageBarNodes", _descriptor9, this);

          _initializerDefineProperty(this, "no_node", _descriptor10, this);

          this.msg = void 0;
        }

        register() {}

        onShow() {
          this.msg = this.openData;
          this.msg.top3Records.sort((a, b) => {
            return (a.role && a.role.powerScore) - (b.role && b.role.powerScore);
          });
          this.gate_txt.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveStageTableByStageId.getValue(this.msg.stageId).StageName);
          this.onSelect(0);
        }

        onToggle(dd) {
          for (let index = 0; index < this.toggleContainer.toggleItems.length; index++) {
            const v = this.toggleContainer.toggleItems[index];

            if (v == dd) {
              this.onSelect(index);
            }
          }
        }

        onSelect(index) {
          console.log(index);

          if (index == 0) {
            this.updateRole(this.msg.firstRecord);
          } else {
            this.updateRole(this.msg.top3Records[index - 1]);
          }
        }

        updateRole(role) {
          console.log(role);

          if (role == null || role.role == null) {
            this.info_node.active = false;
            this.no_node.active = true;
            return;
          }

          this.info_node.active = true;
          this.no_node.active = false;
          const playerInfo = new (_crd && SimpleRoleInfo === void 0 ? (_reportPossibleCrUseOfSimpleRoleInfo({
            error: Error()
          }), SimpleRoleInfo) : SimpleRoleInfo)();
          playerInfo.merge(role.role);
          this.headItem.initHeadInfo({
            roleInfo: playerInfo
          });
          this.name_txt.string = role.role.name;
          this.power_txt.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(role.role.powerScore);
          let totalDamage = 0;
          let heros = [];

          for (let index = 0; index < role.heroes.length; index++) {
            const v = role.heroes[index];
            totalDamage += v.damage;
            let hero = new (_crd && HeroFightInfo === void 0 ? (_reportPossibleCrUseOfHeroFightInfo({
              error: Error()
            }), HeroFightInfo) : HeroFightInfo)();
            hero.intoIndex = index + 1;
            hero.itemId = v.heroItemId;
            hero.level = v.level;
            hero.star = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).forBy(role.role.heroes, "itemId", hero.itemId).star;
            heros.push(hero);
          }

          for (let i = 0; i < this.fightDamageBarNodes.children.length; i++) {
            const v = this.fightDamageBarNodes.children[i];
            let damage = role.heroes[i].damage || 0;
            v.getChildByName("damage_bar").getComponent(ProgressBar).progress = Math.floor(damage * 100 / totalDamage) / 100;
            v.getChildByName("percent_txt").getComponent(Label).string = js.formatStr("%s%", Math.floor(damage * 100 / totalDamage).toString());
          }

          this.fightTeam.setHeros(heros, true);
          this.fightWeapon.setRogueIds(role.weaponIds);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "info_node", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "name_txt", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "power_txt", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gate_txt", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fightTeam", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fightWeapon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "fightDamageBarNodes", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "no_node", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=770c1c4d042592df54c0f03a3e04b4b5399667a1.js.map