System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, tab, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, EquipmentAttrItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEquipAttrInfo(extras) {
    _reporterNs.report("EquipAttrInfo", "./EquipAttrInfo", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b056fVtZ7xLgaQR+MQ8qo7a", "EquipmentAttrItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipmentAttrItem", EquipmentAttrItem = (_dec = ccclass('EquipmentAttrItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class EquipmentAttrItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "iconSpr", _descriptor, this);

          _initializerDefineProperty(this, "nowLab", _descriptor2, this);

          _initializerDefineProperty(this, "nextLab", _descriptor3, this);

          _initializerDefineProperty(this, "arrowNode", _descriptor4, this);
        }

        start() {}

        initData(info, level, isMax) {
          var t = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAttrClientTableByType.getValue(info.attrTable.AttrType);
          this.iconSpr.setTexture(t.Icon); //  this.nameLab.string=LangMgr.getLab(tab.AttrType[info.attrTable.AttrType]);

          this.nowLab.string = info.attrTable.Base + info.getAddValueByLevel(level) + "";
          this.nextLab.string = info.attrTable.Base + info.getAddValueByLevel(level + 1) + "";
        }

        initView(type, value, addValue, icon) {
          // this.iconSpr.setTexture(icon);
          var t = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAttrClientTableByType.getValue(type);
          this.iconSpr.setTexture(t.Icon); // this.nameLab.string=LangMgr.getLab(tab.AttrType[type]);

          this.nowLab.string = value + "";

          if (addValue == 0) {
            this.arrowNode.active = false;
            this.nextLab.node.active = false;
          } else {
            this.arrowNode.active = true;
            this.nextLab.node.active = true;
            this.nextLab.string = addValue + "";
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nowLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nextLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "arrowNode", [_dec5], {
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
//# sourceMappingURL=11fa8f452e4769a640dd2021472b12ffe99d3074.js.map