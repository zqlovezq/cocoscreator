System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, HeroStar, LangMgr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RareBookLevelPreviewPopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHeroStar(extras) {
    _reporterNs.report("HeroStar", "../hero/HeroStar", _context.meta, extras);
  }

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
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      HeroStar = _unresolved_2.HeroStar;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b689B3M6VPL43W1V55QB93", "RareBookLevelPreviewPopItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookLevelPreviewPopItem
       * zhudingchao
       * Mon May 27 2024 20:13:07 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookLevelPreviewPopItem.ts
       *
       */

      _export("RareBookLevelPreviewPopItem", RareBookLevelPreviewPopItem = (_dec = ccclass('RareBookLevelPreviewPopItem'), _dec2 = property(_crd && HeroStar === void 0 ? (_reportPossibleCrUseOfHeroStar({
        error: Error()
      }), HeroStar) : HeroStar), _dec3 = property(Label), _dec4 = property([Node]), _dec(_class = (_class2 = class RareBookLevelPreviewPopItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "heroStar", _descriptor, this);

          _initializerDefineProperty(this, "effectdescLab", _descriptor2, this);

          _initializerDefineProperty(this, "unLockNodes", _descriptor3, this);
        }

        initData(table, isReach = false) {
          this.heroStar.showStar(table.Level);
          this.effectdescLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(table.Description);

          if (isReach) {
            for (let key in this.unLockNodes) {
              this.unLockNodes[key].active = false;
            } // this.effectdescLab.color=new Color().fromHEX(tab.getData().GetKeyValue_ConfigTable().InterfaceTxtGreen);

          } else {
            for (let key in this.unLockNodes) {
              this.unLockNodes[key].active = true;
            }
          }
        }

        onDisable() {
          this.heroStar.onDisable();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "heroStar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectdescLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "unLockNodes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2841f5ea189841dc8174c4b752a56fe8781b6559.js.map