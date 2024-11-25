System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, _dec, _class, _crd, ccclass, property, EquipAttrInfo;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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

      _cclegacy._RF.push({}, "02394kHuAdK5YmsDYDej57D", "EquipAttrInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipAttrInfo", EquipAttrInfo = (_dec = ccclass('EquipAttrInfo'), _dec(_class = class EquipAttrInfo {
        constructor() {
          this.attrId = void 0;
          this._attrTable = void 0;
          this._heroPowerScore = void 0;
        }

        initAttrId(id) {
          this.attrId = id;
        }

        get attrTable() {
          if (!this._attrTable) {
            this._attrTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().EquipAttrTableById.getValue(this.attrId);
          }

          return this._attrTable;
        }
        /**
         * 获得属性增加值根据成长等级
         * @param level 
         */


        getAddValueByLevel(level) {
          var value = Math.floor(level * this.attrTable.Base * this.attrTable.Growth / 10000);
          return value;
        }

        get heroPowerScore() {
          if (!this._heroPowerScore) {
            var tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroPowerScore;
            this._heroPowerScore = tabs.find(a => a.Type == this.attrTable.AttrType); // this._heroPowerScore=tab.getData().HeroPowerScoreById.getValue(this.attrTable.AttrType);
          }

          return this._heroPowerScore;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb8f19be5c9194c72ebd51ac272cef76d75a5dff.js.map