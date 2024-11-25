System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, RogueWeaponHeroItem;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98990Y75BlNZZUDlsMvBduK", "RogueFullItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'RichText', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RogueWeaponHeroItem", RogueWeaponHeroItem = (_dec = ccclass('RogueWeaponHeroItem'), _dec(_class = class RogueWeaponHeroItem extends Component {
        constructor() {
          super(...arguments);
          this.owner = void 0;
          this.rogueInfo = void 0;
        }

        setData(info) {
          this.rogueInfo = info;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eeb3849a2d3c89918de80a5231f0156071602748.js.map