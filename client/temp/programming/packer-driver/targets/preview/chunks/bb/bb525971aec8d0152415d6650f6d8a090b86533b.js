System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, _dec, _class, _crd, ccclass, property, BoundsTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bcbaB1C95I7pBj7duTxGsy", "BoundsTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BoundsTab", BoundsTab = (_dec = ccclass('BoundsTab'), _dec(_class = class BoundsTab {
        //---------------------自有字段-------------------
        constructor(id) {
          this.configId = 0;
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Type = void 0;
          // 类型 
          this.Parameters = [];
          this.setConfigId(id);
        }

        setConfigId(id) {
          this.configId = id;
          this.configTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BoundTableById.getValue(id);
          this.Type = this.configTab.Type;

          for (var index = 0; index < this.configTab.Parameters.length; index++) {
            this.Parameters[index] = this.configTab.Parameters[index];
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb525971aec8d0152415d6650f6d8a090b86533b.js.map