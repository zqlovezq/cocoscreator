System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, Avatar, _dec, _class, _class2, _crd, ccclass, property, EffectUI;

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "../../animation/Avatar", _context.meta, extras);
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
      Layers = _cc.Layers;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Avatar = _unresolved_2.Avatar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78cd4/yJe9EBaT4xyTGQtW7", "EffectUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectUI", EffectUI = (_dec = ccclass('EffectUI'), _dec(_class = (_class2 = class EffectUI extends Component {
        constructor(...args) {
          super(...args);
          this.avatar = null;
        }

        static create() {
          let anim = EffectUI.effects.pop();

          if (anim == null) {
            let nn = new Node("EffectUI");
            nn.layer = Layers.Enum.DEFAULT;
            anim = nn.addComponent(EffectUI);
          }

          anim.node.angle = 0;
          return anim;
        }

        static put(anim) {
          anim.node.removeFromParent();
          anim.reset();
          EffectUI.effects.push(anim);
        }

        static destory() {
          for (let i = 0; i < EffectUI.effects.length; i++) {
            EffectUI.effects[i].node.destroy();
          }

          EffectUI.effects.length = 0;
        }

        reset() {
          if (this.avatar && this.avatar.isValid) {
            this.avatar.recycle();
          }

          this.avatar = null;
        }

        run(animId, cb) {
          this.avatar = (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
            error: Error()
          }), Avatar) : Avatar).create();
          this.node.addChild(this.avatar.node);
          this.avatar.setCb(() => {
            this.remove();
            cb && cb();
          });
          this.avatar.setAnimationId(animId);
        }

        remove() {
          EffectUI.put(this);
        }

      }, _class2.effects = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6ac95ecf33654b1178825b2c76f9c1d4567338c.js.map