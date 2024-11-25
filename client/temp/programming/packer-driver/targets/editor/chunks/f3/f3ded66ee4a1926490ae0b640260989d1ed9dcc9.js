System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, tween, Animation, ViewPop, GameUtil, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ForceUpPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
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
      tween = _cc.tween;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      GameUtil = _unresolved_3.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "649c9kc+IJNJaaA3Zh+Ircu", "ForceUpPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ForceUpPop", ForceUpPop = (_dec = ccclass('ForceUpPop'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Animation), _dec(_class = (_class2 = class ForceUpPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lab_add", _descriptor, this);

          _initializerDefineProperty(this, "lbl_power", _descriptor2, this);

          _initializerDefineProperty(this, "anim_force", _descriptor3, this);

          this.ForceObj = {
            value: 0
          };
          this.tweenAction = null;
        }

        onShow() {
          if (!this.openData) {
            return;
          }

          this.node.active = true;
          this.ForceObj = {
            value: this.openData.power
          };
          this.anim_force.play();
          this.increaseBattlePower();
        }

        increaseBattlePower() {
          let duration1 = 0.6; // 前1秒

          let duration2 = 1.2; // 后0.6秒

          let initialPower = this.openData.power;
          let finalPower = this.openData.power + this.openData.addPower;
          let increaseAmount1 = this.openData.addPower * 0.9; // 提升90%的战斗力

          let increaseAmount2 = this.openData.addPower * 0.1; // 提升10%的战斗力
          // 第一个动作，1秒内提升90%的战斗力

          let action1 = tween().to(duration1, {
            value: initialPower + increaseAmount1
          }, {
            progress: (start, end, current, ratio) => {
              const currentValue = start + ratio * (end - start);
              this.updateBattlePower(currentValue);
              return current;
            }
          }); // // 第二个动作，0.6秒内提升剩余的10%的战斗力

          let action2 = tween().to(duration2, {
            value: finalPower
          }, {
            progress: (start, end, current, ratio) => {
              const currentValue = start + ratio * (end - start);
              this.updateBattlePower(currentValue);
              return current;
            }
          }); // // 序列动作

          this.tweenAction = tween(this.ForceObj).then(action1).call(() => {
            this.ForceObj.value = initialPower + increaseAmount1;
          }).then(action2).delay(1).call(() => {
            this.node.active = false;
          }).start();
        }

        updateBattlePower(value) {
          let finalPower = this.openData.power + this.openData.addPower;
          this.lbl_power.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(Math.floor(value));
          this.lab_add.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(Math.floor(finalPower - value));
        }

        update(dt) {}

        onDestroy() {
          super.onDestroy();
          this.tweenAction.stop();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lab_add", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_power", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "anim_force", [_dec4], {
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
//# sourceMappingURL=f3ded66ee4a1926490ae0b640260989d1ed9dcc9.js.map