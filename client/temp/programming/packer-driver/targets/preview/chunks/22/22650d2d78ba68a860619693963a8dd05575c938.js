System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, ViewPop, FightRootControl, WorldBossControll, FightMacro, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, FightWorldBossResultPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWorldBossControll(extras) {
    _reporterNs.report("WorldBossControll", "../stage/WorldBossControll", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      FightRootControl = _unresolved_3.FightRootControl;
    }, function (_unresolved_4) {
      WorldBossControll = _unresolved_4.WorldBossControll;
    }, function (_unresolved_5) {
      FightMacro = _unresolved_5.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29db1SSoeZE94/Mm7W6uGUO", "FightWorldBossResultPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightWorldBossResultPop", FightWorldBossResultPop = (_dec = ccclass('FightWorldBossResultPop'), _dec2 = property(Label), _dec(_class = (_class2 = class FightWorldBossResultPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "damageLab", _descriptor, this);
        }

        register() {}

        onShow() {
          this.damageLab.string = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).damageStr((_crd && WorldBossControll === void 0 ? (_reportPossibleCrUseOfWorldBossControll({
            error: Error()
          }), WorldBossControll) : WorldBossControll).ins.totalTackDamage);
        } // 点击确定返回主页


        clickGoHomeBtn() {
          (_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.enterMain();
        }

        close() {
          if (this.openData && this.openData.cb) {
            this.openData.cb();
          }

          super.close();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damageLab", [_dec2], {
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
//# sourceMappingURL=22650d2d78ba68a860619693963a8dd05575c938.js.map