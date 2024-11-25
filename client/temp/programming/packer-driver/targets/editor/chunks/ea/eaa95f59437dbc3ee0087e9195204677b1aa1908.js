System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RoleHeadItem, _dec, _class, _crd, ccclass, property, FightTeam;

  function _reportPossibleCrUseOfRoleHeadItem(extras) {
    _reporterNs.report("RoleHeadItem", "../base/obj/role/ui/RoleHeadItem", _context.meta, extras);
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
    }, function (_unresolved_2) {
      RoleHeadItem = _unresolved_2.RoleHeadItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ea6fd9ItFLWpEm6xfKjMcR", "FightTeam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightTeam", FightTeam = (_dec = ccclass('FightTeam'), _dec(_class = class FightTeam extends Component {
        constructor(...args) {
          super(...args);
          this.heads = [];
        }

        onLoad() {
          for (let index = 0; index < this.node.children.length; index++) {
            const v = this.node.children[index];
            v.active = false;
            this.heads.push(v.getComponent(_crd && RoleHeadItem === void 0 ? (_reportPossibleCrUseOfRoleHeadItem({
              error: Error()
            }), RoleHeadItem) : RoleHeadItem));
          }
        }

        getFree() {
          for (let index = 0; index < this.heads.length; index++) {
            const v = this.heads[index];

            if (v.roleInfo == null) {
              return v;
            }
          }

          return null;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eaa95f59437dbc3ee0087e9195204677b1aa1908.js.map