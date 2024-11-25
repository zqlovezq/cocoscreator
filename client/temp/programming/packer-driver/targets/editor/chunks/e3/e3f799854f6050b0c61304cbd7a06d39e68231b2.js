System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, _dec, _class, _class2, _crd, ccclass, property, EffectControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "../../power/powerTab/EffectTab", _context.meta, extras);
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
      AbsControl = _unresolved_2.AbsControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43b44z8zi1Fcqrx15/zvbpc", "EffectControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'v3', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectControl", EffectControl = (_dec = ccclass('EffectControl'), _dec(_class = (_class2 = class EffectControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new EffectControl();
          }

          return this._instance;
        }

        init() {}

        addEffect(effectTab, attack, enemy) {
          if (enemy == null || enemy && (enemy.info == null || enemy.isRecycle)) {
            return;
          }

          enemy.info.addEffect(effectTab);
        }

        removeEffect(effectTab, abs) {
          if (abs && abs.info) {
            abs.info.removeEffect(effectTab);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3f799854f6050b0c61304cbd7a06d39e68231b2.js.map