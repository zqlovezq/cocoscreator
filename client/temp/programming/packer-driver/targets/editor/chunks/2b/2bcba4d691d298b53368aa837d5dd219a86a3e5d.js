System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, EquipmentAttrItem, UIMgr, ViewName, LangMgr, tab, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, EquipmentViewItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "./EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipAttrInfo(extras) {
    _reporterNs.report("EquipAttrInfo", "./EquipAttrInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentAttrItem(extras) {
    _reporterNs.report("EquipmentAttrItem", "./EquipmentAttrItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      EquipmentAttrItem = _unresolved_2.EquipmentAttrItem;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "717d09Q8ZFBHaE2XP00mydc", "EquipmentViewItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'log', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipmentViewItem", EquipmentViewItem = (_dec = ccclass('EquipmentViewItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Prefab), _dec(_class = (_class2 = class EquipmentViewItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "maxLevelLab", _descriptor2, this);

          _initializerDefineProperty(this, "nowLab", _descriptor3, this);

          _initializerDefineProperty(this, "nextLab", _descriptor4, this);

          _initializerDefineProperty(this, "attrNode", _descriptor5, this);

          _initializerDefineProperty(this, "attrItemPrefab", _descriptor6, this);

          this.slotInfo = void 0;
          this.equipInfo = void 0;
          this.currLevel = void 0;
          this.isMaxLevel = void 0;
          this.type = void 0;
        }

        start() {}

        initData(equipInfo, type) {
          this.slotInfo = equipInfo.slotInfo;
          this.equipInfo = equipInfo;
          this.type = type;

          if (type == 1) {
            //强化
            let limitLevel = equipInfo.equipTable.EnhanceLimit;
            this.maxLevelLab.string = limitLevel + "";
            let qhstr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType.EquipUpgradeType_Enhance]); // this.nameLab.string="强化等级(上限"+limitLevel+"级)";

            this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_equip_1", [qhstr]) + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_equip_2", [limitLevel]);
            this.currLevel = this.equipInfo.enhanceLv; // for(let key in this.equipInfo.)

            if (this.equipInfo.enhanceLv >= limitLevel) {
              //该装备强化上限
              this.nowLab.string = limitLevel + "";
              this.isMaxLevel = true;
              this.nextLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_equip_18");
            } else {
              this.nowLab.string = this.slotInfo.enhanceLv + "";
              this.isMaxLevel = false;
              this.nextLab.string = this.slotInfo.enhanceLv + 1 + "";
            }

            this.initAttrItem(this.equipInfo.baseAttrInfos);
          } else if (type == 2) {
            let limitLevel = equipInfo.equipTable.RefineLimit;
            let qhstr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType.EquipUpgradeType_Refine]); // this.nameLab.string="强化等级(上限"+limitLevel+"级)";

            this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_equip_1", [qhstr]) + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_equip_2", [limitLevel]);
            this.currLevel = this.equipInfo.refineLv; // for(let key in this.equipInfo.)

            if (this.equipInfo.refineLv >= limitLevel) {
              //该装备强化上限
              this.nowLab.string = limitLevel + "";
              this.isMaxLevel = true;
            } else {
              this.nowLab.string = this.equipInfo.refineLv + "";
              this.isMaxLevel = false;
              this.nextLab.string = this.equipInfo.refineLv + 1 + "";
            }

            this.initAttrItem(this.equipInfo.extraAttrInfos);
          }
        }

        onClickHelpBtn(event) {
          // log("type===",this.type);
          let node = event.currentTarget;
          let key = "Tips_equip_1";

          if (this.type == 1) {
            key = "Tips_equip_1";
          } else {
            key = "Tips_equip_2";
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommonBlackTipsPop,
            data: {
              "worldPos": node.worldPosition,
              "WordTableKey": key
            }
          });
        }

        initAttrItem(attrs) {
          this.attrNode.removeAllChildren();

          for (let key in attrs) {
            let node = instantiate(this.attrItemPrefab);
            node.getComponent(_crd && EquipmentAttrItem === void 0 ? (_reportPossibleCrUseOfEquipmentAttrItem({
              error: Error()
            }), EquipmentAttrItem) : EquipmentAttrItem).initData(attrs[key], this.currLevel, this.isMaxLevel);
            node.parent = this.attrNode;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxLevelLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nowLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nextLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "attrNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "attrItemPrefab", [_dec7], {
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
//# sourceMappingURL=2bcba4d691d298b53368aa837d5dd219a86a3e5d.js.map