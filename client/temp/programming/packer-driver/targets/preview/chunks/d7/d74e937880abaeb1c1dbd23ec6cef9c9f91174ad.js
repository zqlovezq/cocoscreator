System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, tab, GameplayViewItem, GameplayControl, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameplayView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewItem(extras) {
    _reporterNs.report("GameplayViewItem", "./GameplayViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "./GameplayControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      GameplayViewItem = _unresolved_4.GameplayViewItem;
    }, function (_unresolved_5) {
      GameplayControl = _unresolved_5.GameplayControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e093aBng/9Gq4lNSZvbI3a5", "GameplayView", undefined);
      /*
       * @Date: 2024-06-20 13:52:50
       * @LastEditors: wzq
       * @program:江湖
       * @LastEditTime: 2024-07-23 09:57:08
       */


      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameplayView", GameplayView = (_dec = ccclass('GameplayView'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class GameplayView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);
        }

        register() {}

        onShow() {
          (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
            error: Error()
          }), GameplayControl) : GameplayControl).ins.requestGetClimbTowerInfo();
          this.showViewList();
        }

        showViewList() {
          this.node_content.destroyAllChildren();

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChallengeButtonTable.length; i++) {
            var item = instantiate(this.pfb_item);
            item.parent = this.node_content;
            var itemTs = item.getComponent(_crd && GameplayViewItem === void 0 ? (_reportPossibleCrUseOfGameplayViewItem({
              error: Error()
            }), GameplayViewItem) : GameplayViewItem);
            itemTs.setData((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ChallengeButtonTable[i]);
          }
        }

        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
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
//# sourceMappingURL=d74e937880abaeb1c1dbd23ec6cef9c9f91174ad.js.map