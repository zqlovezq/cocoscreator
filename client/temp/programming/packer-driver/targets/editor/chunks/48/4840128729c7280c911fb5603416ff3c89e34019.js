System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, EquipAttrInfo, EquipData, EquipInfo, _crd, ccclass, property;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipAttrInfo(extras) {
    _reporterNs.report("EquipAttrInfo", "./EquipAttrInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

  _export("EquipInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      EquipAttrInfo = _unresolved_3.EquipAttrInfo;
    }, function (_unresolved_4) {
      EquipData = _unresolved_4.EquipData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6488eMwiwZMpJzHlwzcR2B2", "EquipInfo", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 装备数据 */

      _export("EquipInfo", EquipInfo = class EquipInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).EquipData {
        constructor() {
          super();
          this._itemTable = void 0;
          this._equipTable = void 0;
          this._isWear = false;

          /**装备 总的属性map */
          this._totalAttr = void 0;
          this._slotInfo = void 0;
          this._baseAttrInfos = void 0;
          this._extraAttrInfos = void 0;
          this._enhanceUpgradeTable = void 0;
          this._refineUpgradeTable = void 0;
          //因为玉佩只有穿戴上才会有heroClass
          this._jadeHeroClass = 0;
        }

        merge(equip) {
          for (const key in equip) {
            this[key] = equip[key];
          }
        }

        createDefaultData(itemId) {
          this.id = 0;
          this.score = 0;
          this.itemId = itemId;
        }

        updateData(equip) {
          this.merge(equip);
          this.initBaseAttrInfos();
          this.initExtraAttrInfos();
          this.updateTotalAttr();
        }

        initBaseAttrInfos() {
          this._baseAttrInfos = [];

          for (let key in this.baseAttr) {
            let info = new (_crd && EquipAttrInfo === void 0 ? (_reportPossibleCrUseOfEquipAttrInfo({
              error: Error()
            }), EquipAttrInfo) : EquipAttrInfo)();
            info.initAttrId(this.baseAttr[key]);

            this._baseAttrInfos.push(info);
          }
        }

        get baseAttrInfos() {
          if (!this._baseAttrInfos) {
            this.initBaseAttrInfos();
          }

          return this._baseAttrInfos;
        }

        initExtraAttrInfos() {
          this._extraAttrInfos = [];

          for (let key in this.extraAttr) {
            let info = new (_crd && EquipAttrInfo === void 0 ? (_reportPossibleCrUseOfEquipAttrInfo({
              error: Error()
            }), EquipAttrInfo) : EquipAttrInfo)();
            info.initAttrId(this.extraAttr[key]);

            this._extraAttrInfos.push(info);
          }
        }

        get extraAttrInfos() {
          if (!this._extraAttrInfos) {
            this.initExtraAttrInfos();
          }

          return this._extraAttrInfos;
        }
        /**
        * 道具表数据
        */


        get itemTable() {
          if (!this._itemTable) {
            this._itemTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this["itemId"]);
          }

          return this._itemTable;
        }

        get heroClass() {
          if (this.equipTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Feather) {
            return this._jadeHeroClass;
          }

          return this.equipTable.Class;
        }

        set heroClass(num) {
          if (this.equipTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Feather) {
            this._jadeHeroClass = num;
          }
        }

        get equipTable() {
          if (!this._equipTable) {
            this._equipTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().EquipTableById.getValue(this["itemId"]);
          }

          return this._equipTable;
        }
        /**是否穿戴 */


        get isWear() {
          return this._isWear;
        }

        set isWear(b) {
          this._isWear = b;
        }

        get quality() {
          return this.itemTable.Quality;
        }

        get type() {
          return this.equipTable.Type;
        }
        /**
         * 获取装备类型world表里的key
         * @returns 
         */


        getEquipTypeNameKey() {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType[this.equipTable.Type];
        }

        updateTotalAttr() {
          this.totalAttr.clear();

          for (let key in this.baseAttrInfos) {
            // let table = tab.getData().EquipAttrTableById.getValue(this.baseAttr[key]);
            // let addValue=
            let info = this.baseAttrInfos[key];
            let attrType = info.attrTable.AttrType;
            let addValue = info.getAddValueByLevel(this.enhanceLv);

            if (this.totalAttr.has(attrType)) {
              let value = this.totalAttr.get(attrType);
              this.totalAttr.set(attrType, value + info.attrTable.Base + addValue);
            } else {
              this.totalAttr.set(attrType, info.attrTable.Base + addValue);
            }
          }

          for (let key in this.extraAttrInfos) {
            let info = this.extraAttrInfos[key];
            let attrType = info.attrTable.AttrType;
            let addValue = info.getAddValueByLevel(this.refineLv);

            if (this.totalAttr.has(attrType)) {
              let value = this.totalAttr.get(attrType);
              this.totalAttr.set(attrType, value + info.attrTable.Base + addValue);
            } else {
              this.totalAttr.set(attrType, info.attrTable.Base + addValue);
            }
          }
        }
        /**
         * 总属性
         */


        get totalAttr() {
          if (!this._totalAttr) {
            this._totalAttr = new Map();
            this.updateTotalAttr();
          }

          return this._totalAttr;
        }

        set slotInfo(info) {
          this._slotInfo = info;
        }

        get slotInfo() {
          return this._slotInfo;
        }

        get enhanceLv() {
          if (this.slotInfo && this.slotInfo.enhanceLv <= this.equipTable.EnhanceLimit) {
            return this.slotInfo.enhanceLv;
          }

          return this.equipTable.EnhanceLimit;
        }

        isEnhanceLimit() {
          return this.enhanceLv >= this.equipTable.EnhanceLimit;
        }

        isRefineLimit() {
          return this.refineLv >= this.equipTable.RefineLimit;
        }

        get refineLv() {
          if (this.slotInfo && this.slotInfo.refineLv <= this.equipTable.RefineLimit) {
            return this.slotInfo.refineLv;
          }

          return this.equipTable.RefineLimit;
        }

        refreshEquipUpgradeTable() {
          // let tabs=tab.getData().EquipUpgradeTable;
          let level = this.enhanceLv + 1;
          this._enhanceUpgradeTable = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipUpgradeTab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipUpgradeType.EquipUpgradeType_Enhance, level);
        }

        get enhanceUpgradeTable() {
          if (!this._enhanceUpgradeTable) {
            this.refreshEquipUpgradeTable();
          }

          return this._enhanceUpgradeTable;
        }

        refreshRefineEquipUpgradeTable() {
          // let tabs=tab.getData().EquipUpgradeTable;
          let level = this.refineLv + 1;
          this._refineUpgradeTable = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipUpgradeTab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipUpgradeType.EquipUpgradeType_Refine, level); // this._refineUpgradeTable=tabs.find(a=>a.Level==level&&tab.EquipUpgradeType.EquipUpgradeType_Refine);
        }

        get refineUpgradeTable() {
          if (!this._refineUpgradeTable) {
            this.refreshRefineEquipUpgradeTable();
          }

          return this._refineUpgradeTable;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4840128729c7280c911fb5603416ff3c89e34019.js.map