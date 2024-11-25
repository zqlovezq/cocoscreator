System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, Sprite, tab, LangMgr, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, EquipmentGrowthMaxItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "./EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipAttrInfo(extras) {
    _reporterNs.report("EquipAttrInfo", "./EquipAttrInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }, function (_unresolved_4) {
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      ViewName = _unresolved_5.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87e35rBF25Dapfi3Gu3EHRx", "EquipmentGrowthMaxItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipmentGrowthMaxItem", EquipmentGrowthMaxItem = (_dec = ccclass('EquipmentGrowthMaxItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = (_class2 = class EquipmentGrowthMaxItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLab", _descriptor, this);

          _initializerDefineProperty(this, "levelLab", _descriptor2, this);

          _initializerDefineProperty(this, "contentNode", _descriptor3, this);

          _initializerDefineProperty(this, "attrPrefab", _descriptor4, this);

          this.type = void 0;
        }

        initData(equipInfo, type) {
          if (type == 1) {
            this.levelLab.string = equipInfo.enhanceLv + "";
            var qhstr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType.EquipUpgradeType_Enhance]); // this.nameLab.string="强化等级(上限"+limitLevel+"级)";

            this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_equip_1", [qhstr]);
            this.initAttrItem(equipInfo.baseAttrInfos, equipInfo.enhanceLv);
          } else {
            this.levelLab.string = equipInfo.refineLv + "";

            var _qhstr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipUpgradeType.EquipUpgradeType_Refine]); // this.nameLab.string="强化等级(上限"+limitLevel+"级)";


            this.nameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("ui_equip_1", [_qhstr]);
            this.initAttrItem(equipInfo.extraAttrInfos, equipInfo.refineLv);
          }

          this.type = type;
        }

        initAttrItem(attrs, level) {
          if (level === void 0) {
            level = 0;
          }

          this.contentNode.removeAllChildren();

          for (var key in attrs) {
            var node = instantiate(this.attrPrefab);
            node.parent = this.contentNode;
            var icon = node.getChildByName("icon").getComponent(Sprite);
            var t = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAttrClientTableByType.getValue(attrs[key].attrTable.AttrType);
            icon.setTexture(t.Icon);
            var add = attrs[key].getAddValueByLevel(level);
            node.getChildByName("now_txt").getComponent(Label).string = attrs[key].attrTable.Base + add + "";
          }
        }

        onClickHelpBtn(event) {
          var node = event.currentTarget;
          var key = "Tips_equip_1";

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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "attrPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41500f32d2995c61142b886954ff4886701ecdcd.js.map