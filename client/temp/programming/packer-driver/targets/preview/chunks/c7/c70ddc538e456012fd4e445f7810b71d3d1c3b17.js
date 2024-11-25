System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Animation, FightBossBarItem, FightMacro, EventMgr, WorldBossControll, FightEvent, FightData, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, FightBossTopBarItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../../data/FightAttrData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBossBarItem(extras) {
    _reporterNs.report("FightBossBarItem", "./FightBossBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorldBossControll(extras) {
    _reporterNs.report("WorldBossControll", "../../stage/WorldBossControll", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      FightBossBarItem = _unresolved_2.FightBossBarItem;
    }, function (_unresolved_3) {
      FightMacro = _unresolved_3.FightMacro;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      WorldBossControll = _unresolved_5.WorldBossControll;
    }, function (_unresolved_6) {
      FightEvent = _unresolved_6.FightEvent;
    }, function (_unresolved_7) {
      FightData = _unresolved_7.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50388W05qhLzqwkF2eEbSoN", "FightBossTopBarItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite', 'SpriteFrame', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗世界BOSS进度条，等级， 血条*/

      _export("FightBossTopBarItem", FightBossTopBarItem = (_dec = ccclass('FightBossTopBarItem'), _dec2 = property(Label), _dec3 = property(Animation), _dec(_class = (_class2 = class FightBossTopBarItem extends (_crd && FightBossBarItem === void 0 ? (_reportPossibleCrUseOfFightBossBarItem({
        error: Error()
      }), FightBossBarItem) : FightBossBarItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "damageLab", _descriptor, this);

          _initializerDefineProperty(this, "anim", _descriptor2, this);

          this.isFirst = true;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).World_Boss_LvUp, this.onLvUp, this);
          this.anim.node.active = this.hpCount.node.active = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorlBoss();
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        onLvUp() {
          this.anim.play();
          this.changeColor();
        }

        setAttrData(data) {
          super.setAttrData(data);
          this.updateHp();
          this.changeColor();
        }

        update(dt) {
          if (this.lastHp != (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
            error: Error()
          }), WorldBossControll) : WorldBossControll).ins.totalTackDamage) {
            this.updateHp();
          }
        }

        updateHp() {
          this.lastHp = (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
            error: Error()
          }), WorldBossControll) : WorldBossControll).ins.totalTackDamage;
          this.damageLab.string = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).damageStr(this.lastHp);
          this.hpBar2.progress = (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
            error: Error()
          }), WorldBossControll) : WorldBossControll).ins.damagePercent();
        }

        changeColor() {
          this.hpCount.string = "x" + (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
            error: Error()
          }), WorldBossControll) : WorldBossControll).ins.nowLv;
          var nowBarCount = (_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
            error: Error()
          }), WorldBossControll) : WorldBossControll).ins.nowLv % this.barSfs.length;
          this.hpBar1.barSprite.spriteFrame = this.barSfs[(this.isFirst ? nowBarCount - 1 : this.barSfs.length - 1) % this.barSfs.length];
          this.hpBar1.progress = 1;
          this.hpBar2.barSprite.spriteFrame = this.barSfs[nowBarCount];
          this.isFirst = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damageLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c70ddc538e456012fd4e445f7810b71d3d1c3b17.js.map