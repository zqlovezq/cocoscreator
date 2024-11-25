System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Node, ViewPop, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, WarningPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9049391btZMuJ7XhjBYfUpX", "WarningPop", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'CCInteger', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 警告界面 */

      _export("WarningPop", WarningPop = (_dec = ccclass('WarningPop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(CCFloat), _dec5 = property(CCFloat), _dec(_class = (_class2 = class WarningPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "boss_node", _descriptor, this);

          _initializerDefineProperty(this, "monster_node", _descriptor2, this);

          _initializerDefineProperty(this, "bossTime", _descriptor3, this);

          _initializerDefineProperty(this, "monsterTime", _descriptor4, this);
        }

        register() {}

        onShow() {
          this.playAnim(Number(this.openData));
        }

        playAnim(warning) {
          this.boss_node.active = this.monster_node.active = false;
          var time = 0;
          /** 警告：1.怪潮、2.BOSS */

          if (warning == 1) {
            //怪
            this.monster_node.active = true;
            time = this.monsterTime;
          } else {
            //boss
            this.boss_node.active = true;
            time = this.bossTime;
          }

          this.unscheduleAllCallbacks();
          this.scheduleOnce(() => {
            this.onClose();
          }, time);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boss_node", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "monster_node", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bossTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "monsterTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c93c0f409154b6aa1949fd81d4eabfdb6d7487d.js.map