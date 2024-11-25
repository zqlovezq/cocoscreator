System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, Avatar, _dec, _class, _class2, _crd, ccclass, property, ShadowEffect;

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

      _cclegacy._RF.push({}, "dcc20EzNMBPuJp5nxLzQzev", "ShadowEffect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShadowEffect", ShadowEffect = (_dec = ccclass('ShadowEffect'), _dec(_class = (_class2 = class ShadowEffect extends Component {
        constructor() {
          super(...arguments);
          this.avatar = null;
        }

        static create() {
          var anim = ShadowEffect.effects.pop();

          if (anim == null) {
            var nn = new Node("ShadowEffect");
            nn.layer = Layers.Enum.DEFAULT;
            anim = nn.addComponent(ShadowEffect);
          }

          return anim;
        }

        static put(effect) {
          effect.node.removeFromParent();
          effect.reset();
          ShadowEffect.effects.push(effect);
        }
        /** 销毁 */


        static destory() {
          for (var i = 0; i < ShadowEffect.effects.length; i++) {
            ShadowEffect.effects[i].node.destroy();
          }

          ShadowEffect.effects.length = 0;
        }

        reset() {
          this.avatar.recycle();
          this.avatar = null;
        }

        run(animId) {
          this.avatar = (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
            error: Error()
          }), Avatar) : Avatar).create();
          this.node.addChild(this.avatar.node);
          this.avatar.setAnimationId(animId);
        }

        recycle() {
          ShadowEffect.put(this);
        }

      }, _class2.effects = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=882b0e69201464b884f882895f0637b2d29401be.js.map