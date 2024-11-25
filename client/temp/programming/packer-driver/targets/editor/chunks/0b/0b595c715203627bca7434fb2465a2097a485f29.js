System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbsObjType, RevoltCheatControl, DamageStatisticsInfo, DamageStatisticsData, _crd;

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "./DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../obj/bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "../buff/Buff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "../obj/role/role/RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRevoltCheatControl(extras) {
    _reporterNs.report("RevoltCheatControl", "../../cheat/RevoltCheatControl", _context.meta, extras);
  }

  _export({
    DamageStatisticsInfo: void 0,
    DamageStatisticsData: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AbsObjType = _unresolved_2.AbsObjType;
    }, function (_unresolved_3) {
      RevoltCheatControl = _unresolved_3.RevoltCheatControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38be361MQlADL0nL6CDcgES", "DamageStatisticsData", undefined);

      __checkObsolete__(['Vec3', 'View', 'game', 'size', 'v2', 'view']);

      _export("DamageStatisticsInfo", DamageStatisticsInfo = class DamageStatisticsInfo {
        constructor() {
          this.roleId = void 0;
          this.damage = 0;
          //伤害
          this.secDamage = 0;
          //每秒伤害
          this.heal = 0;
          //治疗
          this.shield = 0;
          //护盾
          this.beDamage = 0;
          //受伤
          this.kill = 0;
        } //击杀


      });
      /** 
       * 伤害统计
       *
       */


      _export("DamageStatisticsData", DamageStatisticsData = class DamageStatisticsData {
        static get ins() {
          if (null == this._instance) {
            this._instance = new DamageStatisticsData();
          }

          return this._instance;
        }

        constructor() {
          this.roleMap = new Map();
          this.totalKill = 0;
          this.bossKill = 0;
        }

        purge() {
          this.roleMap.clear();
          this.totalKill = 0;
          this.bossKill = 0;
          console.warn("销毁");
        }

        init() {
          this.purge();
        }

        nextSec() {
          for (const iterator of this.roleMap) {
            iterator[1].secDamage = 0;
          }
        }

        getRoleById(id) {
          if (!this.roleMap.has(id)) {
            this.roleMap.set(id, new DamageStatisticsInfo());
          }

          return this.roleMap.get(id);
        }

        addBulletDamage(bullet, attack, defanse, damageData) {
          (_crd && RevoltCheatControl === void 0 ? (_reportPossibleCrUseOfRevoltCheatControl({
            error: Error()
          }), RevoltCheatControl) : RevoltCheatControl).ins.addBulletDamage(bullet, attack, defanse, damageData);
          this.addDamage(attack, defanse, damageData);
        }

        addBuffDamage(buff, attack, defanse, damageData) {
          this.addDamage(attack, defanse, damageData);
        }

        addBuffTransferDamage(defanse, damageData) {
          this.addDamage(null, defanse, damageData);
        }

        addDamage(attack, defanse, damageData) {
          //记录伤害
          if (attack && attack.objType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role) {
            let atkRole = this.getRoleById(attack.info.heroFightInfo.id);

            if (atkRole) {
              if (damageData.isDamage()) {
                atkRole.damage += damageData.damage;
                atkRole.secDamage += damageData.damage;
              } else {
                if (damageData.isShield) {
                  atkRole.shield += damageData.damage;
                } else {
                  atkRole.heal += damageData.damage;
                }
              }
            }
          } //记录受伤


          if (defanse && defanse.objType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role) {
            let defRole = this.getRoleById(defanse.info.heroFightInfo.id);

            if (defRole) {
              if (damageData.isDamage()) {
                defRole.beDamage += damageData.damage;
              }
            }
          }
        }
        /** 添加击杀 */


        addKill(attack, defanse) {
          if (attack && attack.objType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role) {
            let atkRole = this.getRoleById(attack.info.heroFightInfo.id);

            if (atkRole) {
              atkRole.kill += 1;
              this.totalKill += 1;

              if (defanse && defanse.info && defanse.info.isBoss) {
                this.bossKill += 1;
              }
            }
          }
        }

      });

      DamageStatisticsData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b595c715203627bca7434fb2465a2097a485f29.js.map