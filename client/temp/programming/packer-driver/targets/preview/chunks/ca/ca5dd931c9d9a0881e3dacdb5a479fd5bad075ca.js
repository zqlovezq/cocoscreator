System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RoleHeadSkillItem, CommonItem, EventMgr, FightEvent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RoleHeadItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRoleHeadSkillItem(extras) {
    _reporterNs.report("RoleHeadSkillItem", "./RoleHeadSkillItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../../../../model/item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "../role/RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../../define/FightEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      RoleHeadSkillItem = _unresolved_2.RoleHeadSkillItem;
    }, function (_unresolved_3) {
      CommonItem = _unresolved_3.CommonItem;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      FightEvent = _unresolved_5.FightEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "707fdurCRRA5bx9scRSH3mH", "RoleHeadItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleHeadItem", RoleHeadItem = (_dec = ccclass('RoleHeadItem'), _dec2 = property(Node), _dec3 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec4 = property(_crd && RoleHeadSkillItem === void 0 ? (_reportPossibleCrUseOfRoleHeadSkillItem({
        error: Error()
      }), RoleHeadSkillItem) : RoleHeadSkillItem), _dec5 = property(_crd && RoleHeadSkillItem === void 0 ? (_reportPossibleCrUseOfRoleHeadSkillItem({
        error: Error()
      }), RoleHeadSkillItem) : RoleHeadSkillItem), _dec(_class = (_class2 = class RoleHeadItem extends Component {
        constructor() {
          super(...arguments);
          this.roleInfo = null;

          _initializerDefineProperty(this, "deadNode", _descriptor, this);

          _initializerDefineProperty(this, "item", _descriptor2, this);

          _initializerDefineProperty(this, "skill1", _descriptor3, this);

          _initializerDefineProperty(this, "skill2", _descriptor4, this);
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Role_Dead, this.onFight_Role_Dead, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Role_Revive, this.onFight_Role_Revive, this);
          this.deadNode.active = false;
        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        setRoleInfo(info) {
          this.roleInfo = info;
          this.skill1.node.active = false;
          this.skill2.node.active = false;
          this.item.initId(info.configId, 1);
          this.skill1.setSkill(info.normalGroup);
          this.node.active = true;
        }

        onFight_Role_Dead(info) {
          if (this.roleInfo == info) {
            this.deadNode.active = true;
          }
        }

        onFight_Role_Revive(info) {
          if (this.roleInfo == info) {
            this.deadNode.active = false;
          }
        }

        onClickRevive() {
          console.log("复活");
          this.deadNode.active = false;
          this.roleInfo.onRevice();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "deadNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skill1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skill2", [_dec5], {
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
//# sourceMappingURL=ca5dd931c9d9a0881e3dacdb5a479fd5bad075ca.js.map