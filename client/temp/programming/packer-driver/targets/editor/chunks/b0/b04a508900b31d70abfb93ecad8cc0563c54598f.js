System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, EventMgr, FightEvent, proto, FightData, RogueControl, Fixed, PlayerControl, _dec, _class, _class2, _crd, ccclass, property, RevoltCheatControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../base/obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueControl(extras) {
    _reporterNs.report("RogueControl", "../view/rogue/RogueControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixed(extras) {
    _reporterNs.report("Fixed", "../../../framework/collision/Fixed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../base/obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../base/obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../base/obj/bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "../base/damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "../base/buff/Buff", _context.meta, extras);
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
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }, function (_unresolved_6) {
      RogueControl = _unresolved_6.RogueControl;
    }, function (_unresolved_7) {
      Fixed = _unresolved_7.default;
    }, function (_unresolved_8) {
      PlayerControl = _unresolved_8.PlayerControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a29f8YHtPNH4phlCWWqZyjr", "RevoltCheatControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'Size', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 反作弊控制器
       */

      _export("RevoltCheatControl", RevoltCheatControl = (_dec = ccclass('RevoltCheatControl'), _dec(_class = (_class2 = class RevoltCheatControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor(...args) {
          super(...args);
          this.bossDatas = [];
          this.bossMap = new Map();
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new RevoltCheatControl();

            this._instance.init();
          }

          return this._instance;
        }

        init() {
          this.register();
          this.clear();
        }

        clear() {
          this.bossMap.clear();
          this.bossDatas.length = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Start, this.onFightStart, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Boss_Enter, this.onBoss_Enter, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Monster_Dead, this.onFight_Monster_Dead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Initiative_Revive, this.onFight_Initiative_Revive, this);
        }

        onFightStart() {
          this.clear();
        }

        getBoss(bossId) {
          for (let index = this.bossDatas.length - 1; index >= 0; index--) {
            if (this.bossDatas[index].bossId == bossId) {
              return this.bossDatas[index];
            }
          }
        }

        getBossByObjId(objId) {
          return this.bossMap.get(objId);
        }

        getBossList() {
          return this.bossDatas;
        }

        onBoss_Enter(absRole) {
          let dd = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).StageBossFightData();
          dd.bossId = absRole.info.configId;
          dd.bossSerial = absRole.objId;
          dd.weaponList = (_crd && RogueControl === void 0 ? (_reportPossibleCrUseOfRogueControl({
            error: Error()
          }), RogueControl) : RogueControl).ins.getSelectAllIdList();
          dd.startTime = (_crd && Fixed === void 0 ? (_reportPossibleCrUseOfFixed({
            error: Error()
          }), Fixed) : Fixed).toFixed((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time / 1000); //先记录出生时间

          dd.fightTime = 0;
          dd.heroList = this.getHeroList();
          dd.combatData = [];
          this.bossDatas.push(dd);
          this.bossMap.set(dd.bossSerial, dd);
          console.error("boss出场", dd, this.bossDatas);
        }

        getHeroList() {
          let list = [];
          let roles = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getRoles();

          for (let index = 0; index < roles.length; index++) {
            const role = roles[index];
            let dd = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).StageFightHeroData();
            dd.heroClass = role.info.configTab.Class;
            dd.heroSerial = role.objId;
            dd.hp = role.info.attrData.hp;
            dd.bufferList = [];

            for (let index = 0; index < role.info.buffs.length; index++) {
              let buff = role.info.buffs[index];
              let buffData = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).StageFightBufferData();
              buffData.bufferId = buff.buffId;
              buffData.createTime = (_crd && Fixed === void 0 ? (_reportPossibleCrUseOfFixed({
                error: Error()
              }), Fixed) : Fixed).toFixed(buff.addTime);
              buffData.layer = buff.ruleNumber;
              buffData.adder = buff.addOwner.objId;
              buffData.target = buff.owner.objId;
              dd.bufferList.push(buffData);
            }

            list.push(dd);
          }

          return list;
        }
        /** boss死亡 */


        onFight_Monster_Dead(absRole) {
          if (absRole.info && absRole.info.isBoss) {
            let boss = this.getBossByObjId(absRole.objId);

            if (boss) {
              boss.fightTime = (_crd && Fixed === void 0 ? (_reportPossibleCrUseOfFixed({
                error: Error()
              }), Fixed) : Fixed).toFixed((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).time / 1000);
              console.error("boss死亡", boss, this.bossDatas);
            }
          }
        }
        /** 鸡 复活 */


        onFight_Initiative_Revive(absRole) {
          for (let index = 0; index < this.bossDatas.length; index++) {
            const boss = this.bossDatas[index];

            if (boss.fightTime == 0) {
              boss.reviveRecord.push(absRole.info.configId);
            }
          }
        }

        addRogue(rogueId) {
          for (let index = 0; index < this.bossDatas.length; index++) {
            const boss = this.bossDatas[index];

            if (boss.fightTime == 0) {
              let dd = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).StageFightExtraWeaponData();
              dd.timestamp = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).time;
              dd.weaponId = rogueId;
              boss.extraWeaponList.push(dd);
            }
          }
        } //造成伤害


        addBulletDamage(bullet, attack, defanse, damageData) {
          let boss = this.getBossByObjId(defanse.objId);

          if (boss) {
            let dd = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).CombatData();
            dd.timestamp = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).time;
            dd.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).CombatEvent.Attack;
            dd.attack = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).CombatEventAttack();
            dd.attack.attacker = bullet.owner.objId;
            dd.attack.bulletId = bullet.info.configId;
            dd.attack.target = defanse.objId;
            dd.attack.isFatalAtk = damageData.isCritical; //会心

            dd.attack.isCritical = damageData.isCriticalPoint; //暴击

            dd.attack.damage = damageData.damage;
            boss.combatData.push(dd);
          }
        }

        addBuff(ownerRole, buff) {
          this.addCombatDataByBuff(true, ownerRole, buff);
        }

        createAddBuff(buff) {
          let addBuff = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CombatData();
          addBuff.timestamp = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
          addBuff.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CombatEvent.AddBuffer;
          addBuff.addBuffer = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CombatEventAddBuffer();
          addBuff.addBuffer.bufferId = buff.buffId;
          addBuff.addBuffer.adder = buff.addOwner.objId;
          addBuff.addBuffer.target = buff.owner.objId;
          addBuff.addBuffer.layer = buff.ruleNumber;
          return addBuff;
        }

        removeBuff(ownerRole, buff) {
          this.addCombatDataByBuff(false, ownerRole, buff);
        }

        addCombatDataByBuff(isAdd, ownerRole, buff) {
          if (ownerRole && ownerRole.isRole()) {
            for (let index = 0; index < this.bossDatas.length; index++) {
              const boss = this.bossDatas[index];

              if (boss.fightTime == 0) {
                boss.combatData.push(isAdd ? this.createAddBuff(buff) : this.createRemoveBuff(buff));
              }
            }
          } else if (buff && buff.owner) {
            let boss = this.getBossByObjId(buff.owner.objId);

            if (boss) {
              boss.combatData.push(isAdd ? this.createAddBuff(buff) : this.createRemoveBuff(buff));
            }
          }
        }

        createRemoveBuff(buff) {
          let removeBuff = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CombatData();
          removeBuff.timestamp = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
          removeBuff.ev = (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CombatEvent.RemoveBuffer;
          removeBuff.removeBuffer = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CombatEventRemoveBuffer();
          removeBuff.removeBuffer.bufferId = buff.buffId;
          removeBuff.removeBuffer.owner = buff.addOwner.objId;
          removeBuff.removeBuffer.layer = buff.ruleNumber;
          return removeBuff;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b04a508900b31d70abfb93ecad8cc0563c54598f.js.map