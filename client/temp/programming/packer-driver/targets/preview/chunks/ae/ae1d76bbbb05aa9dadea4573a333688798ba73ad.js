System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, instantiate, Label, Node, Prefab, tab, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RareBookGroupAttributeITitleItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      Color = _cc.Color;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ae70wD4etAgZKabVZVRw8q", "RareBookGroupAttributeITitleItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookGroupAttributeITitleItem
       * zhudingchao
       * Mon May 27 2024 17:18:11 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookGroupAttributeITitleItem.ts
       *
       */

      _export("RareBookGroupAttributeITitleItem", RareBookGroupAttributeITitleItem = (_dec = ccclass('RareBookGroupAttributeITitleItem'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = (_class2 = class RareBookGroupAttributeITitleItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "titleLab", _descriptor, this);

          _initializerDefineProperty(this, "numLab", _descriptor2, this);

          _initializerDefineProperty(this, "attributeNode", _descriptor3, this);

          _initializerDefineProperty(this, "attrItemPrefab", _descriptor4, this);
        }

        initData(table, curNum, totoal) {
          //this.titleLab.string=table.Level+"星融汇效果";
          this.titleLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_rarebook_25", [table.Level]);
          this.numLab.string = curNum + "/" + totoal;
          this.attributeNode.removeAllChildren();

          if (table.Skill && table.Skill.length > 0) {
            for (var key in table.SkillShow) {
              var item = instantiate(this.attrItemPrefab);
              item.parent = this.attributeNode;
              var lab = item.getChildByName("attr_label").getComponent(Label);
              lab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(table.SkillShow[key]);
            }
          }

          for (var _key in table.AttrType) {
            var type = table.AttrType[_key];
            var value = table.AttrValue[_key];
            var attTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroAttrClientTableByType.getValue(type);

            var _item = instantiate(this.attrItemPrefab);

            _item.parent = this.attributeNode;

            var _lab = _item.getChildByName("attr_label").getComponent(Label);

            var vStr = attTable && attTable.ShowPercent ? value / 100 + "%" : value + "";
            _lab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType[type]) + "+" + vStr;
          }

          var cStr = "";

          if (curNum >= totoal) {
            cStr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtGreen;
          } else {
            cStr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
          }

          this.numLab.color = new Color().fromHEX(cStr);
        }

        updateView(curNum, totoal) {
          this.numLab.string = curNum + "/" + totoal;
          var cStr = "";

          if (curNum >= totoal) {
            cStr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtGreen;
          } else {
            cStr = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed;
          }

          this.numLab.color = new Color().fromHEX(cStr);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "attributeNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "attrItemPrefab", [_dec5], {
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
//# sourceMappingURL=ae1d76bbbb05aa9dadea4573a333688798ba73ad.js.map