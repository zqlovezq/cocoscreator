System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ProgressBar, Toggle, ViewPop, tab, EquipmentAttrItem, EquipData, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, EquipMasterPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentAttrItem(extras) {
    _reporterNs.report("EquipmentAttrItem", "./EquipmentAttrItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipMasterInfo(extras) {
    _reporterNs.report("EquipMasterInfo", "./EquipMasterInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      EquipmentAttrItem = _unresolved_4.EquipmentAttrItem;
    }, function (_unresolved_5) {
      EquipData = _unresolved_5.EquipData;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a0e5pjRTdIbIJ4943vAVTb", "EquipMasterPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'ProgressBar', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipMasterPop", EquipMasterPop = (_dec = ccclass('EquipMasterPop'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Prefab), _dec17 = property(Toggle), _dec18 = property(Toggle), _dec19 = property(Toggle), _dec(_class = (_class2 = class EquipMasterPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progreBar", _descriptor, this);

          _initializerDefineProperty(this, "currValueLab", _descriptor2, this);

          _initializerDefineProperty(this, "totalValueLab", _descriptor3, this);

          _initializerDefineProperty(this, "levelLab", _descriptor4, this);

          _initializerDefineProperty(this, "qualityNode", _descriptor5, this);

          _initializerDefineProperty(this, "strengthenNode", _descriptor6, this);

          _initializerDefineProperty(this, "forgeNode", _descriptor7, this);

          _initializerDefineProperty(this, "qualityLvLab", _descriptor8, this);

          _initializerDefineProperty(this, "qualityMasterLab", _descriptor9, this);

          _initializerDefineProperty(this, "strengthenLvLab", _descriptor10, this);

          _initializerDefineProperty(this, "strengthenMasterLab", _descriptor11, this);

          _initializerDefineProperty(this, "forgeLvLab", _descriptor12, this);

          _initializerDefineProperty(this, "forgeMasterLab", _descriptor13, this);

          _initializerDefineProperty(this, "attrContent", _descriptor14, this);

          _initializerDefineProperty(this, "attrItemPrefab", _descriptor15, this);

          _initializerDefineProperty(this, "toggle_quality", _descriptor16, this);

          _initializerDefineProperty(this, "toggle_enhance", _descriptor17, this);

          _initializerDefineProperty(this, "toggle_refine", _descriptor18, this);

          this.currTag = void 0;
          this.heroClass = void 0;
          this.attrItemComs = void 0;
          this.currMasterInfo = void 0;
        }

        register() {}

        start() {
          this.heroClass = this.openData["heroClass"];

          if (this.openData["type"]) {
            this.currTag = this.openData["type"];
          } else {
            this.currTag = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MasterType.MasterType_Enhance;
          }

          if (this.currTag == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Enhance) {
            this.toggle_enhance.isChecked = true;
          } else if (this.currTag == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Quality) {
            this.toggle_quality.isChecked = true;
          } else if (this.currTag == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Refine) {
            this.toggle_refine.isChecked = true;
          }

          this.attrItemComs = [];
          this.initView();
        }

        initView() {
          if (this.currTag == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Enhance) {
            this.initEnhanceView();
          } else if (this.currTag == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Quality) {
            this.initQualityView();
          } else if (this.currTag == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Refine) {
            this.initRefineView();
          }
        }

        initQualityView() {
          this.qualityNode.active = true;
          this.forgeNode.active = false;
          this.strengthenNode.active = false;
          this.currMasterInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getMasterInfoByHeroClass(this.heroClass);
          let level = this.currMasterInfo.qualityMasterLevel;
          this.levelLab.string = this.currMasterInfo.qualityMasterLevel + "";
          let nextHeroMasterTab = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Quality, level + 1);
          let minLevel = this.getMinLevel(1);

          if (nextHeroMasterTab) {
            this.qualityLvLab.node.active = true;
            this.qualityMasterLab.node.active = false; // let require=nextHeroMasterTab.Require;

            let level = nextHeroMasterTab.Level;
            this.qualityLvLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("heromaster_desc_1000" + level); // this.qualityMasterLab.string=nextHeroMasterTab.Level+"";

            this.progreBar.progress = minLevel / nextHeroMasterTab.Require;
            this.currValueLab.string = minLevel + "";
            this.totalValueLab.string = nextHeroMasterTab.Require + "";
          } else {
            this.progreBar.progress = 1; //minLevel/this.currMasterInfo.qualityTable.Require;

            this.currValueLab.string = this.currMasterInfo.qualityTable.Require + ""; //minLevel+"";

            this.totalValueLab.string = this.currMasterInfo.qualityTable.Require + ""; //满级

            this.qualityLvLab.node.active = false;
            this.qualityMasterLab.node.active = true;
          }

          this.updateAtts(this.currMasterInfo.qualityTable, nextHeroMasterTab);
        }

        initRefineView() {
          this.qualityNode.active = false;
          this.forgeNode.active = true;
          this.strengthenNode.active = false;
          this.currMasterInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getMasterInfoByHeroClass(this.heroClass);
          let level = this.currMasterInfo.refineMasterLevel;
          this.levelLab.string = level + "";
          let nextHeroMasterTab = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Refine, level + 1);
          let minLevel = this.getMinLevel(3);

          if (nextHeroMasterTab) {
            this.forgeLvLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("heromaster_desc_3000" + nextHeroMasterTab.Level);
            this.forgeMasterLab.node.active = false;
            this.forgeLvLab.node.active = true; // this.forgeMasterLab.string=nextHeroMasterTab.Level+"";

            this.progreBar.progress = minLevel / nextHeroMasterTab.Require;
            this.currValueLab.string = minLevel + "";
            this.totalValueLab.string = nextHeroMasterTab.Require + "";
          } else {
            //满级
            this.forgeMasterLab.node.active = true;
            this.forgeLvLab.node.active = false;
            this.progreBar.progress = 1; //minLevel/this.currMasterInfo.refineTable.Require;

            this.currValueLab.string = this.currMasterInfo.refineTable.Require + ""; //minLevel+"";

            this.totalValueLab.string = this.currMasterInfo.refineTable.Require + "";
          }

          this.updateAtts(this.currMasterInfo.refineTable, nextHeroMasterTab);
        }

        initEnhanceView() {
          this.qualityNode.active = false;
          this.forgeNode.active = false;
          this.strengthenNode.active = true;
          this.currMasterInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getMasterInfoByHeroClass(this.heroClass);
          let level = this.currMasterInfo.enhanceMasterLevel;
          this.levelLab.string = level + "";
          let nextHeroMasterTab = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MasterType.MasterType_Enhance, level + 1);
          let minLevel = this.getMinLevel(2);

          if (nextHeroMasterTab) {
            this.strengthenLvLab.node.active = true;
            this.strengthenMasterLab.node.active = false;
            this.strengthenLvLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("heromaster_desc_2000" + nextHeroMasterTab.Level); // this.strengthenMasterLab.string=nextHeroMasterTab.Level+"";

            this.progreBar.progress = minLevel / nextHeroMasterTab.Require;
            this.currValueLab.string = minLevel + "";
            this.totalValueLab.string = nextHeroMasterTab.Require + "";
          } else {
            this.strengthenLvLab.node.active = false;
            this.strengthenMasterLab.node.active = true;
            this.progreBar.progress = 1; //minLevel/this.currMasterInfo.enhanceTable.Require;

            this.currValueLab.string = this.currMasterInfo.enhanceTable.Require + ""; //minLevel+"";

            this.totalValueLab.string = this.currMasterInfo.enhanceTable.Require + "";
          }

          this.updateAtts(this.currMasterInfo.enhanceTable, nextHeroMasterTab);
        }

        getMinLevel(type) {
          let allEquips = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getWearEquipInfosByHeroClass(this.heroClass);
          let minLevel = -1;

          for (let i = 1; i < 5; i++) {
            if (allEquips[i]) {
              let level = 0;

              if (type == 1) {
                level = allEquips[i].equipTable.MasterLevel;
              } else if (type == 2) {
                level = allEquips[i].enhanceLv;
              } else if (type == 3) {
                level = allEquips[i].refineLv;
              }

              if (minLevel == -1) {
                minLevel = level;
              }

              if (level < minLevel) {
                minLevel = level;
              }
            } else {
              minLevel = 0;
            }
          }

          if (minLevel == -1) {
            minLevel = 0;
          }

          return minLevel;
        }

        updateAtts(currMasterInfo, nextMasterInfo) {
          let attrMaps = new Map();

          if (currMasterInfo) {
            let atts = currMasterInfo.AttrList;

            for (let key in atts) {
              let item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().EquipAttrTableById.getValue(atts[key]);
              let info = attrMaps.get(item.AttrType);

              if (info) {
                info.value += item.Base;
              } else {
                info = {
                  "value": item.Base,
                  "next": 0
                };
                attrMaps.set(item.AttrType, info);
              }
            }
          }

          if (nextMasterInfo) {
            let atts = nextMasterInfo.AttrList;

            for (let key in atts) {
              let item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().EquipAttrTableById.getValue(atts[key]);
              let info = attrMaps.get(item.AttrType);

              if (info) {
                info.next += item.Base;
              } else {
                info = {
                  "value": 0,
                  "next": item.Base
                };
                attrMaps.set(item.AttrType, info);
              }
            }
          }

          for (let key in this.attrItemComs) {
            this.attrItemComs[key].node.active = false;
          }

          let index = 0;
          attrMaps.forEach((vlaue, key) => {
            if (!this.attrItemComs[index]) {
              let node = instantiate(this.attrItemPrefab);
              node.parent = this.attrContent;
              this.attrItemComs.push(node.getComponent(_crd && EquipmentAttrItem === void 0 ? (_reportPossibleCrUseOfEquipmentAttrItem({
                error: Error()
              }), EquipmentAttrItem) : EquipmentAttrItem));
            }

            this.attrItemComs[index].node.active = true;
            this.attrItemComs[index].initView(key, vlaue.value, vlaue.next, "");
            index++;
          });
        }

        onClickTogle(event, type) {
          if (Number(type) != this.currTag) {
            this.currTag = Number(type);
            this.initView();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progreBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currValueLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalValueLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "qualityNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "strengthenNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "forgeNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "qualityLvLab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "qualityMasterLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "strengthenLvLab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "strengthenMasterLab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "forgeLvLab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "forgeMasterLab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "attrContent", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "attrItemPrefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "toggle_quality", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "toggle_enhance", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "toggle_refine", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=23f4c4b932e9bee5f4e06b6072790807db86a839.js.map