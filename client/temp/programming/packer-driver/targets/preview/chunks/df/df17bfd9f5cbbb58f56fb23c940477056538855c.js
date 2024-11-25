System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, v3, EffectUI, _dec, _class, _crd, ccclass, property, DeadEffectUI;

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectUI(extras) {
    _reporterNs.report("EffectUI", "./EffectUI", _context.meta, extras);
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
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      EffectUI = _unresolved_2.EffectUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3079OTwgFFWotZsPWpxxk8", "DeadEffectUI", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 死亡特效  游魂 */

      _export("DeadEffectUI", DeadEffectUI = (_dec = ccclass('DeadEffectUI'), _dec(_class = class DeadEffectUI extends Component {
        constructor() {
          super(...arguments);
          this.index = 0;
          this.ids = void 0;
          this.effectUi = void 0;
          this.abs = void 0;
        }

        static create() {
          var nn = new Node("DeadEffectUI");
          nn.layer = Layers.Enum.DEFAULT;
          return nn.addComponent(DeadEffectUI);
        }

        setAbs(_abs) {
          this.abs = _abs;
        }

        setAnimIds(_ids) {
          this.ids = _ids;
          this.index = 0;
          this.runNext();
        }

        runNext() {
          if (this.index >= this.ids.length) {
            this.node.destroy();
            return;
          }

          var id = this.ids[this.index];
          this.run(id);
          this.index++;
        }

        run(animId) {
          this.effectUi = (_crd && EffectUI === void 0 ? (_reportPossibleCrUseOfEffectUI({
            error: Error()
          }), EffectUI) : EffectUI).create();
          this.effectUi.node.parent = this.node;
          this.effectUi.node.position = v3();
          this.effectUi.run(animId, () => {
            this.effectUi = null;
            this.runNext();
          });
        }

        remove() {
          if (this.effectUi && this.effectUi.isValid) {
            this.effectUi.remove();
          }

          this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df17bfd9f5cbbb58f56fb23c940477056538855c.js.map