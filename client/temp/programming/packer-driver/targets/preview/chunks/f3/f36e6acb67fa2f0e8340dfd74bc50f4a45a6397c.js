System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, PowerBase, BoundsTab, _dec, _class, _crd, ccclass, property, BulletTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./PowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoundsTab(extras) {
    _reporterNs.report("BoundsTab", "./BoundsTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "./BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "./EffectTab", _context.meta, extras);
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
      PowerBase = _unresolved_3.PowerBase;
    }, function (_unresolved_4) {
      BoundsTab = _unresolved_4.BoundsTab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76456L8/utNL44X78NAylru", "BulletTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletTab", BulletTab = (_dec = ccclass('BulletTab'), _dec(_class = class BulletTab extends (_crd && PowerBase === void 0 ? (_reportPossibleCrUseOfPowerBase({
        error: Error()
      }), PowerBase) : PowerBase) {
        constructor() {
          super(...arguments);
          this.powerType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_BulletTable;
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Id = void 0;
          // ID 
          this.BulletType = void 0;
          // 子弹类型 
          this.BulletOffset = void 0;
          // 跟随子弹偏移 
          this.Speed = void 0;
          // 速度 
          this.Rating = void 0;
          // 子弹层级 
          this.BornAnimationId = void 0;
          // 出生动画 
          this.WalkAnimationId = void 0;
          // 移动动画 
          this.DeadAnimationId = void 0;
          // 死亡动画 
          this.Bounds = void 0;
          // 包围盒组 
          this.BulletBorn = void 0;
          // 子弹出生点 
          this.EnemyUnit = void 0;
          // 索敌单位 
          this.SearchEnemy = void 0;
          // 索敌规则 
          this.EnemyFiltrate = void 0;
          // 索敌筛选 
          this.EffectUnit = void 0;
          // 作用单位 
          this.Trajectory = void 0;
          // 子弹轨迹 
          this.ForwardArrow = void 0;
          // 正向箭 
          this.Fission = void 0;
          // 分裂 
          this.Penetration = void 0;
          // 穿透 
          this.Catapult = void 0;
          // 弹射 
          this.Round = void 0;
          // 回旋 
          this.Rotate = void 0;
          // 自旋 
          this.Centrifugation = void 0;
          // 离心 
          this.ScreenBounce = void 0;
          // 屏幕反弹 
          this.CommonShow = void 0;
          // 通用表现 
          this.IntervalEffect = void 0;
          // 间隔时间效果 
          this.LiveTime = void 0;
          // 生存时间 
          this.DamageTick = void 0;
          // 伤害间隔 
          this.DamageScale = void 0;
          // 子弹伤害系数 
          this.AddEffect = void 0;
          // 子弹额外效果 
          this.DamageAmount = void 0;
          // 子弹多段伤害 
          this.SameLow = void 0;
          // 相同子弹衰减 
          this.HitChance = void 0;
          // 命中触发概率 
          this.HitTrigger = void 0;
          // 命中触发效果 
          this.HitEffect = void 0;
          // 命中特效 
          this.HitShake = void 0;
          // 命中抖动 
          this.AddBuffChance = void 0;
          // buff触发概率 
          this.AddBuff = void 0;
          // 加buff 
          this.CollisionInterval = void 0;
          // 触碰间隔 
          this.DeathType = void 0;
          // 死亡方式 
          this.DeathTrigger = void 0;
          // 死亡触发子弹 
          this.OlnyOne = void 0;
          // 相同子弹唯一 
          this.NoHarm = void 0;
          // 子系忽视父系 
          this.OlnyOneSon = void 0;
          // 子系伤害唯一 
          this.IsReviveClean = void 0;
          // 复活清除 
          this.SoundId = void 0;
          // 子弹音效 
          this.HitBack = void 0;
          // 命中击退 
          //---------------------自有字段-------------------
          this.boundTabs = [];
          this.DeathTriggerTabs = [];
          this.addBuffTabs = [];
          this.hitTriggerTab = null;
          this.addEffectTab = [];
          this.intervalEffectBulletTab = null;
          //跟随预留
          this.followOwner = [];
        }

        setConfigId(id) {
          super.setConfigId(id); // this.Bounds[0] = 4
          //包围盒配置

          for (var index = 0; index < this.Bounds.length; index++) {
            var v = this.Bounds[index];
            this.boundTabs.push(new (_crd && BoundsTab === void 0 ? (_reportPossibleCrUseOfBoundsTab({
              error: Error()
            }), BoundsTab) : BoundsTab)(v));
          } //死亡触发子弹配置


          for (var _index = 0; _index < this.DeathTrigger.length; _index++) {
            this.DeathTriggerTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable, this.DeathTrigger[_index]));
          } //buff配置


          for (var _index2 = 0; _index2 < this.AddBuff.length; _index2++) {
            this.addBuffTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BuffTable, this.AddBuff[_index2]));
          } //命中触发子弹配置


          if (this.isHitTriggerBullet()) {
            this.hitTriggerTab = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable, this.HitTrigger[1]);
          } //效果配置


          for (var _index3 = 0; _index3 < this.AddEffect.length; _index3++) {
            this.addEffectTab.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_EffectTable, this.AddEffect[_index3]));
          }
          /*时间间隔产生子弹 */


          if (this.isIntervalEffect()) {
            this.intervalEffectBulletTab = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable, this.IntervalEffect[1]);
          }
        }

        addPowerValue(powerKey, powerValue, index) {
          if (powerKey == "Bounds") {
            var idx = Math.floor(index / 4);
            var boundTab = this.boundTabs[idx];

            if (boundTab == null) {
              return;
            }

            if (boundTab.Parameters[index] == null) {
              boundTab.Parameters[index] = 0;
            }

            boundTab.Parameters[index] += powerValue;
          } else {
            super.addPowerValue(powerKey, powerValue, index);
          }
        }

        isSearchNone() {
          return this.SearchEnemy == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SearchEnemy.SearchEnemy_None;
        }
        /** 获取有效的动画，确定显示层级 */


        getValidAnimId() {
          return this.BornAnimationId || this.WalkAnimationId || this.DeadAnimationId;
        }

        isExtends() {
          return this.BulletBorn == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BulletBorn.BulletBorn_Inherit;
        }

        isHitTrigger() {
          return this.HitTrigger.length > 0;
        }
        /** 命中触发子弹 */


        isHitTriggerBullet() {
          return this.HitTrigger[0] == 1;
        }
        /** 命中触发更改速度 */


        isHitTriggerSpeed() {
          return this.HitTrigger[0] == 2;
        }
        /** 是否间隔效果 */


        isIntervalEffect() {
          return this.IntervalEffect.length > 0;
        }
        /** 是否发射遮罩 */


        isLaunchMask() {
          return this.CommonShow == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CommonShow.CommonShow_LaunchMask;
        }

        isHitBack() {
          return this.HitBack.length > 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f36e6acb67fa2f0e8340dfd74bc50f4a45a6397c.js.map