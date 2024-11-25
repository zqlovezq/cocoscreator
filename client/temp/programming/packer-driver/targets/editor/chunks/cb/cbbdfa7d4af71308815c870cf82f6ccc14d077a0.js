System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, EquipData, _dec, _class, _crd, ccclass, property, EquipMasterInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

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
      EquipData = _unresolved_3.EquipData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1466a7zJK1FY7Iyq2FYY85j", "EquipMasterInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipMasterInfo", EquipMasterInfo = (_dec = ccclass('EquipMasterInfo'), _dec(_class = class EquipMasterInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).HeroMasterData {
        constructor(...args) {
          super(...args);
          this._qualityTable = void 0;
          this._enhanceTable = void 0;
          this._refineTable = void 0;

          /**品质装备大师等级 */
          this.qualityMasterLevel = 0;
          this.enhanceMasterLevel = 0;
          this.refineMasterLevel = 0;
          this._totalAttrMap = void 0;
        }

        merge(masteInfo) {
          if (masteInfo) {
            if (masteInfo.qualityLv) {
              this.qualityLv = masteInfo.qualityLv;
            } else {
              this.qualityLv = 0;
            }

            if (masteInfo.enhanceLv) {
              this.enhanceLv = masteInfo.enhanceLv;
            } else {
              this.enhanceLv = 0;
            }

            if (masteInfo.refineLv) {
              this.refineLv = masteInfo.refineLv;
            } else {
              this.refineLv = 0;
            }
          } else {
            this.enhanceLv = 0;
            this.qualityLv = 0;
            this.refineLv = 0;
          } // for (const key in masteInfo) {
          //     this[key] = masteInfo[key]
          // }


          this._enhanceTable = null;
          this._refineTable = null;
          this._qualityTable = null;
          this._totalAttrMap = null;
          this.initMaserLevel();
        }

        initMaserLevel() {
          let list = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroMasterTable; // this.qualityMasterLevel=0;
          // for(let key in list){
          //     let tabdata=list[key];
          //     if(tabdata.Type==tab.MasterType.MasterType_Quality){
          //         if(this.qualityLv>=tabdata.Require){
          //             if(tabdata.Level>=this.qualityMasterLevel){
          //                 this.qualityMasterLevel=tabdata.Level;
          //             }
          //         }
          //     }else if(tabdata.Type==tab.MasterType.MasterType_Enhance){
          //         if(this.enhanceLv>=tabdata.Require){
          //             if(tabdata.Level>=this.enhanceMasterLevel){
          //                 this.enhanceMasterLevel=tabdata.Level;
          //             }
          //         }
          //     }else if(tabdata.Type==tab.MasterType.MasterType_Refine){
          //         if(this.refineLv>=tabdata.Require){
          //             if(tabdata.Level>=this.refineMasterLevel){
          //                 this.refineMasterLevel=tabdata.Level;
          //             }
          //         }
          //     }
          // }

          if (this.qualityLv != 0) {
            let cfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroMasterTableById.getValue(this.qualityLv);

            if (cfg) {
              this.qualityMasterLevel = cfg.Level;
            }
          }

          if (this.enhanceLv != 0) {
            let cfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroMasterTableById.getValue(this.enhanceLv);

            if (cfg) {
              this.enhanceMasterLevel = cfg.Level;
            }
          }

          if (this.refineLv != 0) {
            let cfg = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroMasterTableById.getValue(this.refineLv);

            if (cfg) {
              this.refineMasterLevel = cfg.Level;
            }
          }
        }

        initTotalAttrMap() {
          this._totalAttrMap = new Map();
          let atts = [];

          if (this.qualityTable) {
            atts = atts.concat(this.qualityTable.AttrList);
          }

          if (this.enhanceTable) {
            atts = atts.concat(this.enhanceTable.AttrList);
          }

          if (this.refineTable) {
            atts = atts.concat(this.refineTable.AttrList);
          }

          for (let key in atts) {
            let attrTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().EquipAttrTableById.getValue(atts[key]);
            this.addAttr(attrTab.AttrType, attrTab.Base);
          }
        }

        get totalAttrMap() {
          if (!this._totalAttrMap) {
            this.initTotalAttrMap();
          }

          return this._totalAttrMap;
        }

        addAttr(type, num) {
          if (this._totalAttrMap.has(type)) {
            this._totalAttrMap.set(type, this._totalAttrMap.get(type) + num);
          } else {
            this._totalAttrMap.set(type, num);
          }
        }

        get qualityTable() {
          if (this.qualityMasterLevel > 0) {
            this.refreshQualityTable();
            return this._qualityTable;
          } else {
            return null;
          }
        }

        refreshQualityTable() {
          this._qualityTable = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Quality, this.qualityMasterLevel);
        }

        get enhanceTable() {
          if (this.enhanceMasterLevel > 0) {
            this.refreshEnhanceTable();
            return this._enhanceTable;
          } else {
            return null;
          }
        }

        refreshEnhanceTable() {
          this._enhanceTable = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Enhance, this.enhanceMasterLevel);
        }

        get refineTable() {
          if (this.refineMasterLevel > 0) {
            this.refreshRefineTable();
            return this._refineTable;
          } else {
            return null;
          }
        }

        refreshRefineTable() {
          this._refineTable = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Refine, this.refineMasterLevel);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cbbdfa7d4af71308815c870cf82f6ccc14d077a0.js.map