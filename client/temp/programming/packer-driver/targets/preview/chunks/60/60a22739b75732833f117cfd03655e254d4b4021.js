System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, EventMgr, FightEvent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RoleHeadSkillItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSkillGroup(extras) {
    _reporterNs.report("SkillGroup", "../../../skill/SkillGroup", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }, function (_unresolved_3) {
      FightEvent = _unresolved_3.FightEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "106968GTatAbYhLbSxuCEu5", "RoleHeadSkillItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RoleHeadSkillItem", RoleHeadSkillItem = (_dec = ccclass('RoleHeadSkillItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = class RoleHeadSkillItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spr", _descriptor, this);

          _initializerDefineProperty(this, "lab", _descriptor2, this);

          _initializerDefineProperty(this, "cdBar", _descriptor3, this);

          this.skillGroup = void 0;
        }

        onLoad() {
          this.cdBar.fillRange = 0;
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Fight_Skill_Cd_Progress, this.on_fight_Fight_Skill_Cd_Progress, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Skill_Attack_Count_Change, this.on_fight_Skill_Attack_Count_Change, this);
        }

        setSkill(skillGroup) {
          this.skillGroup = skillGroup;
          this.spr.setTexture(this.skillGroup.configTab.Icon);
          this.updateCount();
          this.node.active = true;
        }

        updateCount() {
          this.lab.string = this.skillGroup.getCanAttackCount().toString();
        }

        on_fight_Skill_Attack_Count_Change(skillGroupId) {
          if (this.skillGroup && this.skillGroup.configId == skillGroupId) {
            this.updateCount();
          }
        }

        on_fight_Fight_Skill_Cd_Progress(skillGroupId, progress) {
          if (this.skillGroup && this.skillGroup.configId == skillGroupId) {
            this.cdBar.fillRange = 1 - progress;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cdBar", [_dec4], {
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
//# sourceMappingURL=60a22739b75732833f117cfd03655e254d4b4021.js.map