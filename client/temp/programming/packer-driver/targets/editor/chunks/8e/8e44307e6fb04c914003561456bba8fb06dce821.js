System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, EventMgr, FightEvent, FightBossBarItem, ComponentBase, FrameControl, AbsObjType, FightData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, FightBossBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBossBarItem(extras) {
    _reporterNs.report("FightBossBarItem", "./FightBossBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../../base/obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../../base/obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFrameControl(extras) {
    _reporterNs.report("FrameControl", "../../base/frame/FrameControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../../base/obj/AbsObj", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      FightEvent = _unresolved_3.FightEvent;
    }, function (_unresolved_4) {
      FightBossBarItem = _unresolved_4.FightBossBarItem;
    }, function (_unresolved_5) {
      ComponentBase = _unresolved_5.ComponentBase;
    }, function (_unresolved_6) {
      FrameControl = _unresolved_6.FrameControl;
    }, function (_unresolved_7) {
      AbsObjType = _unresolved_7.AbsObjType;
    }, function (_unresolved_8) {
      FightData = _unresolved_8.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42273oJkt1KzJHd41+yvhj9", "FightBossBar", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗Boss血条，  单boss、双boss*/

      _export("FightBossBar", FightBossBar = (_dec = ccclass('FightBossBar'), _dec2 = property(_crd && FightBossBarItem === void 0 ? (_reportPossibleCrUseOfFightBossBarItem({
        error: Error()
      }), FightBossBarItem) : FightBossBarItem), _dec3 = property(Node), _dec4 = property([_crd && FightBossBarItem === void 0 ? (_reportPossibleCrUseOfFightBossBarItem({
        error: Error()
      }), FightBossBarItem) : FightBossBarItem]), _dec5 = property(_crd && FightBossBarItem === void 0 ? (_reportPossibleCrUseOfFightBossBarItem({
        error: Error()
      }), FightBossBarItem) : FightBossBarItem), _dec(_class = (_class2 = class FightBossBar extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "singleBar", _descriptor, this);

          _initializerDefineProperty(this, "doubleNode", _descriptor2, this);

          _initializerDefineProperty(this, "doubleBars", _descriptor3, this);

          _initializerDefineProperty(this, "topBar", _descriptor4, this);

          this.validBoss = [];
        }

        onLoad() {
          super.onLoad();

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.isWorldAndGuildBoss()) {
            this.singleBar.node.active = false;
            this.singleBar = this.topBar;
          }

          this.updateValidBoss();
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Boss_Enter, this.onBoss_Enter, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Boss_Dead_State, this.onBoss_Dead_State, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Monster_Dead, this.onFight_Monster_Dead, this);
        }

        onBoss_Enter(absRole) {
          this.updateValidBoss();
        }

        onBoss_Dead_State() {
          this.singleBar.dead();

          for (let index = 0; index < this.doubleBars.length; index++) {
            const v = this.doubleBars[index];
            v.dead();
          }
        }

        onFight_Monster_Dead(absRole) {
          if (absRole.info && absRole.info.isBoss) {
            this.updateValidBoss();
          }
        }

        updateValidBoss() {
          this.validBoss.length = 0;
          let list = (_crd && FrameControl === void 0 ? (_reportPossibleCrUseOfFrameControl({
            error: Error()
          }), FrameControl) : FrameControl).ins.getObjList((_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy);

          for (let index = 0; index < list.length; index++) {
            const v = list[index];

            if (v.info && v.info.isBoss && !v.isDead) {
              this.validBoss.push(v);
            }
          }

          this.node.active = false;
          this.singleBar.setBoss(null);

          for (let index = 0; index < this.doubleBars.length; index++) {
            const v = this.doubleBars[index];
            v.setBoss(null);
          }

          if (this.validBoss.length == 1) {
            this.node.active = true;
            this.singleBar.node.active = true;
            this.doubleNode.active = false;
            this.singleBar.setBoss(this.validBoss[0]);
          } else if (this.validBoss.length == 2) {
            this.node.active = true;
            this.singleBar.node.active = false;
            this.doubleNode.active = true;

            for (let index = 0; index < this.doubleBars.length; index++) {
              const v = this.doubleBars[index];
              v.setBoss(this.validBoss[index]);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "singleBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "doubleNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "doubleBars", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "topBar", [_dec5], {
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
//# sourceMappingURL=8e44307e6fb04c914003561456bba8fb06dce821.js.map