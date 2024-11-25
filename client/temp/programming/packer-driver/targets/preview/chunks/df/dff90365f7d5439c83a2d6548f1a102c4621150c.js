System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, UITransform, v3, view, ViewPop, FightDamageRankItem, DamageStatisticsData, PlayerControl, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, FightDamageRankPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightDamageRankItem(extras) {
    _reporterNs.report("FightDamageRankItem", "./FightDamageRankItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageStatisticsData(extras) {
    _reporterNs.report("DamageStatisticsData", "../../base/damage/DamageStatisticsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageStatisticsInfo(extras) {
    _reporterNs.report("DamageStatisticsInfo", "../../base/damage/DamageStatisticsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../../base/obj/role/role/PlayerControl", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      view = _cc.view;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      FightDamageRankItem = _unresolved_3.FightDamageRankItem;
    }, function (_unresolved_4) {
      DamageStatisticsData = _unresolved_4.DamageStatisticsData;
    }, function (_unresolved_5) {
      PlayerControl = _unresolved_5.PlayerControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56b8aAgCsJCKZMHJJ8EoEyK", "FightDamageRankPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'EditBox', 'EventTouch', 'game', 'instantiate', 'js', 'Label', 'Layers', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'Toggle', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightDamageRankPop", FightDamageRankPop = (_dec = ccclass('FightDamageRankPop'), _dec2 = property(Node), _dec3 = property(UITransform), _dec4 = property(Node), _dec(_class = (_class2 = class FightDamageRankPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pop", _descriptor, this);

          _initializerDefineProperty(this, "bgNode", _descriptor2, this);

          _initializerDefineProperty(this, "heros", _descriptor3, this);

          this.heroItems = [];
          this.damageInfos = [];
        }

        onLoad() {
          for (var index = 0; index < this.heros.children.length; index++) {
            var v = this.heros.children[index];
            this.heroItems.push(v.getComponent(_crd && FightDamageRankItem === void 0 ? (_reportPossibleCrUseOfFightDamageRankItem({
              error: Error()
            }), FightDamageRankItem) : FightDamageRankItem));
          }

          this.schedule(() => {
            this.refresh();
          }, 0.5);
        }

        register() {}

        start() {
          var pos = this.node.getComponent(UITransform).convertToNodeSpaceAR(v3(this.openData.event.getUILocation().x, this.openData.event.getUILocation().y));
          pos.x + 50;

          if (pos.x + this.bgNode.width > view.getVisibleSize().width / 2) {
            pos.x = view.getVisibleSize().width / 2 - this.bgNode.width;
          }

          if (pos.y - this.bgNode.height < view.getVisibleSize().height / 2) {
            pos.y = -view.getVisibleSize().height / 2 + this.bgNode.height - 50;
          }

          this.pop.position = pos;
          this.refresh();
        }

        onShow() {
          var list = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getIntoHeros();

          for (var index = 0; index < list.length; index++) {
            if (list[index].isIntoFight()) {
              this.damageInfos.push((_crd && DamageStatisticsData === void 0 ? (_reportPossibleCrUseOfDamageStatisticsData({
                error: Error()
              }), DamageStatisticsData) : DamageStatisticsData).ins.getRoleById(list[index].id));
            }
          }

          for (var _index = 0; _index < this.heroItems.length; _index++) {
            var v = this.heroItems[_index];

            if (list[_index]) {
              v.node.active = true;
              v.setData(list[_index]);
            } else {
              v.node.active = false;
            }
          }

          this.refresh();
        }

        refresh() {
          var total = 0;

          for (var index = 0; index < this.damageInfos.length; index++) {
            var v = this.damageInfos[index];
            total += v.damage;
          }

          total = Math.max(total, 1);

          for (var _index2 = 0; _index2 < this.damageInfos.length; _index2++) {
            var _v = this.damageInfos[_index2];

            if (this.heroItems[_index2]) {
              this.heroItems[_index2].setDamage(_v.damage, total, _v.secDamage);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "heros", [_dec4], {
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
//# sourceMappingURL=dff90365f7d5439c83a2d6548f1a102c4621150c.js.map