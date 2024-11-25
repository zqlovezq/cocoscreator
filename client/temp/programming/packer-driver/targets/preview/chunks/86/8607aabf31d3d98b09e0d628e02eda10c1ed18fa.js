System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Animation, createAnimation, _dec, _class, _crd, ccclass, property, GuideMonsterAnim;

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../utils/GameUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      createAnimation = _unresolved_2.createAnimation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a710dOWLphJIYVcv4ivE4Po", "GuideMonsterAnim", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'log', 'Node', 'Sprite', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuideMonsterAnim", GuideMonsterAnim = (_dec = ccclass('GuideMonsterAnim'), _dec(_class = class GuideMonsterAnim extends Component {
        onLoad() {
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.node, Number(this.node.name));
        }

        onDisable() {
          if (this.node.getComponent(Sprite)) {
            var sprite = this.node.getComponent(Sprite);
            sprite.spriteFrame = null;
          }

          if (this.node.getComponent(Animation)) {
            var anim = this.node.getComponent(Animation);
            var animName = anim.defaultClip.name;
            var animState = anim.getState(animName);
            animState.stop();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8607aabf31d3d98b09e0d628e02eda10c1ed18fa.js.map