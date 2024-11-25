System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SceneBase, PlaySound, SoundUrl, _dec, _class, _crd, ccclass, property, MainScene;

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "./SceneBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlaySound(extras) {
    _reporterNs.report("PlaySound", "../logic/utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundUrl(extras) {
    _reporterNs.report("SoundUrl", "../Common/script/EnumTypeMgr", _context.meta, extras);
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
    }, function (_unresolved_3) {
      PlaySound = _unresolved_3.PlaySound;
    }, function (_unresolved_4) {
      SoundUrl = _unresolved_4.SoundUrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "518af1qnXxII6pmHcQWN0Dg", "MainScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'Prefab', 'ResolutionPolicy', 'SpriteFrame', 'Texture2D', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainScene", MainScene = (_dec = ccclass('MainScene'), _dec(_class = class MainScene extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        onLoad() {
          super.onLoad();
          this.showDefaultPfb();
          (_crd && PlaySound === void 0 ? (_reportPossibleCrUseOfPlaySound({
            error: Error()
          }), PlaySound) : PlaySound)((_crd && SoundUrl === void 0 ? (_reportPossibleCrUseOfSoundUrl({
            error: Error()
          }), SoundUrl) : SoundUrl).MainBGM);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9de739e3d4895da00b9f6c9393b87e4a6f26627e.js.map