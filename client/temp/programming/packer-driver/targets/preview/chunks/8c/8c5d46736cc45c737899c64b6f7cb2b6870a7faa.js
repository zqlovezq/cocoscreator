System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SceneBase, _dec, _class, _crd, ccclass, property, LoadingScene;

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "./SceneBase", _context.meta, extras);
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
      SceneBase = _unresolved_2.SceneBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8b06vvohxEl6fVbQqSK9hL", "LoadingScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'Prefab', 'ResolutionPolicy', 'SpriteFrame', 'Texture2D', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingScene", LoadingScene = (_dec = ccclass('LoadingScene'), _dec(_class = class LoadingScene extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        onLoad() {
          super.onLoad();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c5d46736cc45c737899c64b6f7cb2b6870a7faa.js.map