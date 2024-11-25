System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsObjInfo, AbsObjInfoAttr, tab, FightMacro, AbsObjType, _dec, _class, _crd, ccclass, property, BulletInfo;

  function _reportPossibleCrUseOfAbsObjInfo(extras) {
    _reporterNs.report("AbsObjInfo", "../AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfoAttr(extras) {
    _reporterNs.report("AbsObjInfoAttr", "../AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletForwardArrow(extras) {
    _reporterNs.report("BulletForwardArrow", "../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTab(extras) {
    _reporterNs.report("BulletTab", "../../../power/powerTab/BulletTab", _context.meta, extras);
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
      AbsObjInfo = _unresolved_2.AbsObjInfo;
      AbsObjInfoAttr = _unresolved_2.AbsObjInfoAttr;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      FightMacro = _unresolved_4.FightMacro;
    }, function (_unresolved_5) {
      AbsObjType = _unresolved_5.AbsObjType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec90amaRztH7ozkMg8vH3pP", "BulletInfo", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletInfo", BulletInfo = (_dec = ccclass('BulletInfo'), _dec(_class = class BulletInfo extends (_crd && AbsObjInfo === void 0 ? (_reportPossibleCrUseOfAbsObjInfo({
        error: Error()
      }), AbsObjInfo) : AbsObjInfo) {
        constructor() {
          super(...arguments);
          this.objType = (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).bullet;
          this.configTab = void 0;
          this.parentSoleId = "";
          //父子弹唯一id
          this.ScreenBounceCount = 0;
          this.sonGroupId = 0;
          //产生出的子弹组id
          this.isInitInterval = false;

          /** 伤害系数 */
          this.DamageScale = 0;
        }

        reset() {
          this.parentSoleId = "";
          this.ScreenBounceCount = 0;
          this.DamageScale = 0;
          this.sonGroupId = 0;
          super.reset();
        }

        setConfigId(id) {
          super.setConfigId(id);
          this.setConfigTab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BulletTableById.getValue(id));
        }
        /** 组id, 同组衰减用 */


        get groupId() {
          return this.getObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
            error: Error()
          }), AbsObjInfoAttr) : AbsObjInfoAttr).bulletGroupId);
        }

        setConfigTab(conf) {
          super.setConfigId(conf.configId);
          super.setConfigTab(conf);
          this.DamageScale = this.configTab.DamageScale[0];

          if (this.configTab.isIntervalEffect()) {
            this.isInitInterval = false;

            if (this.configTab.IntervalEffect[2]) {
              this.isInitInterval = true;
            }
          }
        }
        /** 命中死亡 */


        isHitDeath() {
          return this.configTab.DeathType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DeathType.DeathType_HitDeath;
        }
        /** 生存时间死亡 */


        isTimeDeath() {
          return this.configTab.DeathType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DeathType.DeathType_TimeDeath;
        }
        /** 释放者死亡 */


        isOwnDeath() {
          return this.configTab.DeathType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DeathType.DeathType_OwnDeath;
        }
        /** 是否可穿透 */


        isPenetration() {
          return this.configTab.Penetration >= 0;
        }
        /** 穿透死亡 */


        isPenetrationDeath() {
          return this.isPenetration() && this.getObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
            error: Error()
          }), AbsObjInfoAttr) : AbsObjInfoAttr).hitCount) > this.configTab.Penetration;
        }
        /** 是否可弹射 */


        isCatapult() {
          return this.configTab.Catapult != 0;
        }
        /** 弹射死亡 */


        isCatapultDeath() {
          return this.getObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
            error: Error()
          }), AbsObjInfoAttr) : AbsObjInfoAttr).catapultCount) > this.configTab.Catapult;
        }
        /** 回旋(回弹) */


        isRound() {
          return this.configTab.Round.length > 0;
        }
        /** 屏幕反弹 */


        isScreenBounce() {
          return this.configTab.ScreenBounce > 0;
        }
        /** 旋转 */


        isRotate() {
          return this.configTab.Rotate != 0;
        }
        /** 离心 */


        isCentrifugation() {
          return this.configTab.Centrifugation.length > 0;
        }
        /** 多向剑类型 */


        isForwardArrowAndType(type) {
          if (this.configTab.ForwardArrow.length > 0) {
            return this.configTab.ForwardArrow[0] == type;
          }

          return false;
        }
        /** 是否有可添加buff */


        isHasAddBuff() {
          return this.configTab.AddBuff.length > 0;
        }
        /** 相同子弹唯一 */


        isOlnyOne() {
          return this.configTab.OlnyOne;
        }
        /** 子系伤害唯一  */


        isolnyOneSon() {
          return this.configTab.OlnyOneSon;
        }
        /** 是否跟随发射者 */


        isForwardOwner() {
          return this.configTab.BulletType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BulletType.BulletType_FollowingBullet;
        }

        intervalTime() {
          if (this.isInitInterval) {
            console.log("时间间隔---", this.configTab.IntervalEffect[2]);
            return this.configTab.IntervalEffect[2];
          }

          return this.configTab.IntervalEffect[0];
        }
        /** 出生音效 */


        bornSound() {
          return this.configTab.SoundId[0];
        }
        /** 命中音效 */


        hitSound() {
          return this.configTab.SoundId[1];
        }

        addScreenBounceCount() {
          this.ScreenBounceCount += 1;
          this.DamageScale = this.DamageScale * (this.configTab.ScreenBounce / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT);
        }

        getLiveTime() {
          if (this.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_Trajectory) {
            var total = 0;
            this.configTab.LiveTime.forEach(v => {
              total += v;
            });
            console.log("直线轨迹", total);
            return total;
          }

          return this.configTab.LiveTime[0];
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=146fe3e52221f794d3c508ccf5ecfdd2b9d01873.js.map