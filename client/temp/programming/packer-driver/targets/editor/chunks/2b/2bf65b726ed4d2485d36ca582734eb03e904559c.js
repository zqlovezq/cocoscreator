System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, ViewPop, RareBookData, RareBookRewardPreviewPopItem, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RareBookRewardPreviewPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "./RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookRewardPreviewPopItem(extras) {
    _reporterNs.report("RareBookRewardPreviewPopItem", "./RareBookRewardPreviewPopItem", _context.meta, extras);
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
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      RareBookData = _unresolved_3.RareBookData;
    }, function (_unresolved_4) {
      RareBookRewardPreviewPopItem = _unresolved_4.RareBookRewardPreviewPopItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6cb3yyqxVGUoziYAkRDNjK", "RareBookRewardPreviewPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookRewardPreviewPop
       * zhudingchao
       * Mon May 27 2024 21:00:59 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookRewardPreviewPop.ts
       *
       */

      _export("RareBookRewardPreviewPop", RareBookRewardPreviewPop = (_dec = ccclass('RareBookRewardPreviewPop'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = class RareBookRewardPreviewPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);
        }

        register() {}

        onShow() {
          this.initView();
        }

        initView() {
          let alls = (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.getBookInfos();
          let list = [];

          for (let i = 0; i < 3; i++) {
            list.push([]);
          }

          for (let key in alls) {
            let index = alls[key].bookTable.Aptitude - 1;
            list[index].push(alls[key]);
          }

          let len = list.length - 1;

          for (let i = len; i >= 0; i--) {
            list[i].sort((a, b) => {
              return a.itemId - b.itemId;
            });
            let item = instantiate(this.itemPrefab);
            item.parent = this.contentNode;
            item.getComponent(_crd && RareBookRewardPreviewPopItem === void 0 ? (_reportPossibleCrUseOfRareBookRewardPreviewPopItem({
              error: Error()
            }), RareBookRewardPreviewPopItem) : RareBookRewardPreviewPopItem).initData(i + 1, list[i]);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
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
//# sourceMappingURL=2bf65b726ed4d2485d36ca582734eb03e904559c.js.map