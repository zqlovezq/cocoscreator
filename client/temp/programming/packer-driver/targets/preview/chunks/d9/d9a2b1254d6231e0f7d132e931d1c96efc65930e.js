System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, tab, UIMgr, ViewName, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RareBookAttributeItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60f1fG+Y/VGTZ4E9eETLaHK", "RareBookAttributeItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookAttributeItem
       * zhudingchao
       * Thu May 23 2024 17:26:54 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookAttributeItem.ts
       *
       */

      _export("RareBookAttributeItem", RareBookAttributeItem = (_dec = ccclass('RareBookAttributeItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Label), _dec(_class = (_class2 = class RareBookAttributeItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "iconSpr", _descriptor, this);

          _initializerDefineProperty(this, "nowValueLab", _descriptor2, this);

          _initializerDefineProperty(this, "levelUpNode", _descriptor3, this);

          _initializerDefineProperty(this, "nextLab", _descriptor4, this);

          this.type = void 0;
        }

        initView(type, value, nextValue) {
          if (nextValue === void 0) {
            nextValue = -1;
          }

          this.type = type;
          var t = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroAttrClientTableByType.getValue(type);
          this.iconSpr.setTexture(t.Icon); // this.nameLab.string=LangMgr.getLab(tab.AttrType[type]);

          this.nowValueLab.string = value + "";

          if (nextValue < 0) {
            this.levelUpNode.active = false;
          } else {
            this.levelUpNode.active = true;
            this.nextLab.string = nextValue + "";
          }
        }

        onClickItem() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommonBlackTipsPop,
            data: {
              "worldPos": this.iconSpr.node.worldPosition,
              "WordTableKey": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType[this.type]
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nowValueLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelUpNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nextLab", [_dec5], {
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
//# sourceMappingURL=d9a2b1254d6231e0f7d132e931d1c96efc65930e.js.map