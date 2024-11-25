System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, FightUITeamItem, _dec, _class, _crd, ccclass, property, FightUITeam;

  function _reportPossibleCrUseOfFightUITeamItem(extras) {
    _reporterNs.report("FightUITeamItem", "./FightUITeamItem", _context.meta, extras);
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
      FightUITeamItem = _unresolved_2.FightUITeamItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ea6fd9ItFLWpEm6xfKjMcR", "FightUITeam", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗界面显示的头像 */

      _export("FightUITeam", FightUITeam = (_dec = ccclass('FightUITeam'), _dec(_class = class FightUITeam extends Component {
        constructor() {
          super(...arguments);
          this.heads = [];
        }

        onLoad() {
          for (var index = 0; index < this.node.children.length; index++) {
            var v = this.node.children[index];
            v.active = false;
            this.heads.push(v.getComponent(_crd && FightUITeamItem === void 0 ? (_reportPossibleCrUseOfFightUITeamItem({
              error: Error()
            }), FightUITeamItem) : FightUITeamItem));
          }
        }

        getFree() {
          for (var index = 0; index < this.heads.length; index++) {
            var v = this.heads[index];

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
//# sourceMappingURL=5c0b836832b768e2bd04310b4eb33a1457c3a830.js.map