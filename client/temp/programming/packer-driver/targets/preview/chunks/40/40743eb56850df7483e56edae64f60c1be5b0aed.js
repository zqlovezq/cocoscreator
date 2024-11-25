System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BattlePassToggleItem;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassView(extras) {
    _reporterNs.report("BattlePassView", "./BattlePassView", _context.meta, extras);
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

      _cclegacy._RF.push({}, "78736zLpI5I0p4XQZF5I05n", "BattlePassToggleItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattlePassToggleItem", BattlePassToggleItem = (_dec = ccclass('BattlePassToggleItem'), _dec(_class = class BattlePassToggleItem extends Component {
        constructor() {
          super(...arguments);
          this._mainView = null;
          this._passTab = null;
        }

        initData(table, view) {
          this._passTab = table;
          this._mainView = view;
        }

        checkToggleItem() {
          this._mainView.switchView(this._passTab.BattlePassTab);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40743eb56850df7483e56edae64f60c1be5b0aed.js.map