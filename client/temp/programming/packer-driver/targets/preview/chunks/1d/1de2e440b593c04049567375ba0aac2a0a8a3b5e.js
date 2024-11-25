System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, Sprite, tab, ItemData, GameUtil, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ConsumeResourceItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ItemData = _unresolved_3.ItemData;
    }, function (_unresolved_4) {
      GameUtil = _unresolved_4.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6b44FKXCdFcqeXNh/DJSDk", "ConsumeResourceItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ConsumeResourceItem
       * zhudingchao
       * Fri May 24 2024 17:24:14 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/common/ConsumeResourceItem.ts
       *
       */

      _export("ConsumeResourceItem", ConsumeResourceItem = (_dec = ccclass('ConsumeResourceItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class ConsumeResourceItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "iconSpr", _descriptor, this);

          _initializerDefineProperty(this, "haveLab", _descriptor2, this);

          _initializerDefineProperty(this, "needLab", _descriptor3, this);

          this.isEnough = false;
        }

        initData(itemId, needNum) {
          var itemTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          this.iconSpr.setTexture(itemTable.Icon);
          var currNum = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(itemId);
          this.haveLab.string = "" + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(currNum);
          this.needLab.string = "" + (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber(needNum, true);
          this.isEnough = currNum >= needNum;

          if (!this.isEnough) {
            this.haveLab.color = new Color().fromHEX((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable().InterfaceTxtRed);
          } else {
            this.haveLab.color = new Color().fromHEX("#FFFFFF");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconSpr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "haveLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "needLab", [_dec4], {
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
//# sourceMappingURL=1de2e440b593c04049567375ba0aac2a0a8a3b5e.js.map