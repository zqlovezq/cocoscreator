System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, FightMacro, DamageLab, DamegeControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

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

  _export("DamegeControl", void 0);

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
      FightMacro = _unresolved_3.FightMacro;
    }, function (_unresolved_4) {
      DamageLab = _unresolved_4.DamageLab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "31bfb+eGUJMebcVJQJtPcK5", "DamegeControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'math', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 伤害计算 */

      _export("DamegeControl", DamegeControl = class DamegeControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        /**
         * 伤害计算
         * @param bullet 子弹
         * @param defanseAbs 防御者
         */
        static bullet_damageCalculate(bullet, defanseAbs) {
          let damage = -10;

          if (defanseAbs.checkBulletDamageGroup(bullet.info.groupId)) {
            if (bullet.info.configTab.SameLow) {
              //同组子弹伤害衰减
              damage = damage * bullet.info.configTab.SameLow / 10000;
            }
          }

          defanseAbs.addDamegeGroupId(bullet.info.groupId);
          return damage;
        }
        /** 攻击治疗  */


        static buff_AttackHeal(buff) {
          let addHp = buff.addParm * buff.effectTab.Parameters / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE;
          addHp = Math.floor(addHp);
          let abs = buff.abs;
          buff.abs.info.onHitDamage(addHp);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(addHp, false, abs, 0);
        }
        /** 最大生命百分比回血  */


        static buff_BigHpHeal(buff) {
          let addHp = buff.addParm * buff.effectTab.Parameters / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE;
          addHp = Math.floor(addHp);
          let abs = buff.abs;
          buff.abs.info.onHitDamage(addHp);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(addHp, false, abs, 0);
        }
        /** 当前生命百分比掉血   */


        static buff_NowHpHeal(buff) {
          let addHp = buff.addParm * buff.effectTab.Parameters / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE;
          addHp = Math.floor(addHp);
          let abs = buff.abs;
          buff.abs.info.onHitDamage(addHp);
          (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
            error: Error()
          }), DamageLab) : DamageLab).addShowDamageNum(addHp, false, abs, 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58e4a9217422e1664a6ebe45b5c9be69bb85bda1.js.map