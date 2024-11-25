System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewBase, _dec, _class, _crd, ccclass, property, ViewPop;

  function _reportPossibleCrUseOfViewBase(extras) {
    _reporterNs.report("ViewBase", "./ViewBase", _context.meta, extras);
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
      ViewBase = _unresolved_2.ViewBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "878beegNP9NnZHv19+hXp1d", "ViewPop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'director', 'instantiate', 'Layers', 'Node', 'Prefab', 'ResolutionPolicy', 'Sprite', 'tween', 'UITransform', 'v3', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ViewPop", ViewPop = (_dec = ccclass('ViewPop'), _dec(_class = class ViewPop extends (_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
        error: Error()
      }), ViewBase) : ViewBase) {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48d6ad71073b49bd2fbcd79d150983a7843a072b.js.map