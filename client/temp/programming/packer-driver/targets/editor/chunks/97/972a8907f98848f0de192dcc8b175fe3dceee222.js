System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, _dec, _class, _crd, ccclass, property, DropExpItem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "033eeVzjYFO05zSD1IK/t2s", "DropExpItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 掉落经验 */

      _export("DropExpItem", DropExpItem = (_dec = ccclass('DropExpItem'), _dec(_class = class DropExpItem extends Component {
        constructor(...args) {
          super(...args);
          this.exp = 0;
        }

        static create() {
          let nn = new Node("DropExpItem");
          nn.addComponent(Sprite);
          let comp = nn.addComponent(DropExpItem);
          return comp;
        }

        setExp() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=972a8907f98848f0de192dcc8b175fe3dceee222.js.map