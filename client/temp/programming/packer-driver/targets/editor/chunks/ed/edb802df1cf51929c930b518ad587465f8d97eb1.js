System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, RogueBaseItem, RogueWeaponHeroItem, WeaponInfoItem, RareBookData, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RogueBookItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRogueInfo(extras) {
    _reporterNs.report("RogueInfo", "./RogueInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueBaseItem(extras) {
    _reporterNs.report("RogueBaseItem", "./RogueBaseItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRogueWeaponHeroItem(extras) {
    _reporterNs.report("RogueWeaponHeroItem", "./RogueWeaponHeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponInfoItem(extras) {
    _reporterNs.report("WeaponInfoItem", "../../../model/common/WeaponInfoItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../../../model/rareBook/RareBookData", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      RogueBaseItem = _unresolved_2.RogueBaseItem;
    }, function (_unresolved_3) {
      RogueWeaponHeroItem = _unresolved_3.RogueWeaponHeroItem;
    }, function (_unresolved_4) {
      WeaponInfoItem = _unresolved_4.WeaponInfoItem;
    }, function (_unresolved_5) {
      RareBookData = _unresolved_5.RareBookData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a72bby9ONBLO5gt2+dew5yC", "RogueWeaponItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'sp', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RogueBookItem", RogueBookItem = (_dec = ccclass('RogueBookItem'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec(_class = (_class2 = class RogueBookItem extends (_crd && RogueBaseItem === void 0 ? (_reportPossibleCrUseOfRogueBaseItem({
        error: Error()
      }), RogueBaseItem) : RogueBaseItem) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "weaponPfb", _descriptor, this);

          _initializerDefineProperty(this, "heroPfb", _descriptor2, this);

          _initializerDefineProperty(this, "RogueFullPfb", _descriptor3, this);

          _initializerDefineProperty(this, "parentNode", _descriptor4, this);
        }

        setData(info) {
          super.setData(info);

          if (info.heroItemId) {
            let nn = instantiate(this.heroPfb);
            this.parentNode.addChild(nn);
            nn.getComponent(_crd && RogueWeaponHeroItem === void 0 ? (_reportPossibleCrUseOfRogueWeaponHeroItem({
              error: Error()
            }), RogueWeaponHeroItem) : RogueWeaponHeroItem).setData(info);
          } else if (info.ifFullId()) {
            let nn = instantiate(this.RogueFullPfb);
            this.parentNode.addChild(nn);
          } else {
            let nn = instantiate(this.weaponPfb);
            this.parentNode.addChild(nn);
            let bookInfo = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.getBookInfoByItemId(info.rogueTab.BookId); // let bookInfo = new RareBookInfo()
            // bookInfo.initItemId(info.rogueTab.BookId)

            nn.getComponent(_crd && WeaponInfoItem === void 0 ? (_reportPossibleCrUseOfWeaponInfoItem({
              error: Error()
            }), WeaponInfoItem) : WeaponInfoItem).initData(bookInfo, info);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponPfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "heroPfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "RogueFullPfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "parentNode", [_dec5], {
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
//# sourceMappingURL=edb802df1cf51929c930b518ad587465f8d97eb1.js.map