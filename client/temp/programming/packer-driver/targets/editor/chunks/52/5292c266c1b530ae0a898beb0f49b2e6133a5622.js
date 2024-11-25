System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, _dec, _class, _crd, ccclass, property, RogueBaseItem;

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "./RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoguePop(extras) {
    _reporterNs.report("RoguePop", "./RoguePop", _context.meta, extras);
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
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56a1bxvt5RIwp/gwnSQdCFy", "RogueBaseItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'sp', 'Sprite', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RogueBaseItem", RogueBaseItem = (_dec = ccclass('RogueBaseItem'), _dec(_class = class RogueBaseItem extends Component {
        constructor(...args) {
          super(...args);
          this.owner = void 0;
          this.rogueInfo = void 0;
        }

        setOwner(_owner) {
          this.owner = _owner;
        }

        setData(info) {
          this.rogueInfo = info;
        }

        onClick() {
          this.owner && this.owner.onItemClick(this.rogueInfo);
        }

        setStar(star) {
          const recommend_node = this.node.getChildByName("recommend_node");

          if (!recommend_node) {
            return;
          }

          recommend_node.active = true;
          const layout = recommend_node.getChildByName("layout");
          const hideNode = layout.getChildByName("high_node");
          const midNode = layout.getChildByName("mid_node");
          const lowNode = layout.getChildByName("low_node");
          hideNode.active = star === 3;
          midNode.active = star === 2;
          lowNode.active = star === 1;
        }

        showChoose() {
          const anim = this.node.children[0].getComponent(Animation);

          if (anim) {
            anim.play(anim.defaultClip.name);
          } else {
            if (this.node.children[0] && this.node.children[0].children[0]) {
              const weaponAnim = this.node.children[0].children[0].children[0].getComponent(Animation);

              if (weaponAnim) {
                weaponAnim.play(weaponAnim.defaultClip.name);
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5292c266c1b530ae0a898beb0f49b2e6133a5622.js.map