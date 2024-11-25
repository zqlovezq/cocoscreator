System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewBase, _dec, _class, _crd, ccclass, property, ViewScreen;

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

      _cclegacy._RF.push({}, "c5cf0JgQ6xJka2495wdAq0E", "ViewScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'instantiate', 'Node', 'Prefab', 'ResolutionPolicy', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ViewScreen", ViewScreen = (_dec = ccclass('ViewScreen'), _dec(_class = class ViewScreen extends (_crd && ViewBase === void 0 ? (_reportPossibleCrUseOfViewBase({
        error: Error()
      }), ViewBase) : ViewBase) {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=382a7e41386236866254434f1c8fa185c4021f50.js.map