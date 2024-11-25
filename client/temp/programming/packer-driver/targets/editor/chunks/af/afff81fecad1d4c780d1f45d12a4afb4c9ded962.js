System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Sprite, ViewPop, LangMgr, EquipData, tab, RareBookStarUpItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, EquipFettersPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "./EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookStarUpItem(extras) {
    _reporterNs.report("RareBookStarUpItem", "../rareBook/RareBookStarUpItem", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      EquipData = _unresolved_4.EquipData;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      RareBookStarUpItem = _unresolved_6.RareBookStarUpItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c43bfvGvK5MPZuRhBBsvtAh", "EquipFettersPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * EquipFettersPop
       * zhudingchao
       * Thu Jul 18 2024 17:07:27 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/equip/EquipFettersPop.ts
       *
       */

      _export("EquipFettersPop", EquipFettersPop = (_dec = ccclass('EquipFettersPop'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Prefab), _dec(_class = (_class2 = class EquipFettersPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "titleSpr", _descriptor, this);

          _initializerDefineProperty(this, "titleLab1", _descriptor2, this);

          _initializerDefineProperty(this, "titleLab2", _descriptor3, this);

          _initializerDefineProperty(this, "lastlevelLab", _descriptor4, this);

          _initializerDefineProperty(this, "currlevelLab", _descriptor5, this);

          _initializerDefineProperty(this, "layoutNode", _descriptor6, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor7, this);
        }

        register() {}

        onShow() {
          if (this.openData) {
            let type = this.openData["type"];
            let level = this.openData["level"];
            let titleIconName = "";
            let tilteKey = "";
            let table = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel(type, level);
            let lastTable = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.getHeroMasterTableByTypeAndLevel(type, level - 1);

            if (type == 1) {
              //品质大师
              titleIconName = "shengXingDaShiTitle";
              tilteKey = "ui_hero_26";
            } else if (type == 2) {
              titleIconName = "qiangHuaDaShiTitle";
              tilteKey = "ui_hero_27";
            } else if (type == 3) {
              titleIconName = "cuiLianDaShiTitle";
              tilteKey = "ui_hero_28";
            }

            this.titleSpr.setTexture("lang/world_lang_cn/hero/" + titleIconName);
            this.titleLab2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(tilteKey);
            this.titleLab1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(tilteKey);
            this.lastlevelLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [level - 1]);
            this.currlevelLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_heroresonancepop_3", [level]);
            let attrMaps = new Map();

            if (table) {
              let atts = table.AttrList;

              for (let key in atts) {
                let item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().EquipAttrTableById.getValue(atts[key]);
                let info = attrMaps.get(item.AttrType);

                if (info) {
                  info.next += item.Base;
                } else {
                  info = {
                    "next": item.Base,
                    "value": 0
                  };
                  attrMaps.set(item.AttrType, info);
                }
              }
            }

            if (lastTable) {
              let atts = lastTable.AttrList;

              for (let key in atts) {
                let item = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().EquipAttrTableById.getValue(atts[key]);
                let info = attrMaps.get(item.AttrType);

                if (info) {
                  info.value += item.Base;
                } else {
                  info = {
                    "next": 0,
                    "value": item.Base
                  };
                  attrMaps.set(item.AttrType, info);
                }
              }
            }

            attrMaps.forEach((vlaue, key) => {
              let item = instantiate(this.itemPrefab);
              item.parent = this.layoutNode;
              item.getComponent(_crd && RareBookStarUpItem === void 0 ? (_reportPossibleCrUseOfRareBookStarUpItem({
                error: Error()
              }), RareBookStarUpItem) : RareBookStarUpItem).initView(key, vlaue.value, vlaue.next);
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLab1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleLab2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lastlevelLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "currlevelLab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "layoutNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec8], {
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
//# sourceMappingURL=afff81fecad1d4c780d1f45d12a4afb4c9ded962.js.map