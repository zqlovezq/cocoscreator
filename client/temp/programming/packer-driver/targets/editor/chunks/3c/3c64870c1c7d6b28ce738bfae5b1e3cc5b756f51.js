System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, ViewPop, tab, MallLayoutCell, InfiniteList, Global, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, DiamondBuyPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallLayoutCell(extras) {
    _reporterNs.report("MallLayoutCell", "./MallLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../../Global", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      MallLayoutCell = _unresolved_4.MallLayoutCell;
    }, function (_unresolved_5) {
      InfiniteList = _unresolved_5.default;
    }, function (_unresolved_6) {
      Global = _unresolved_6.Global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "beb2e4TUEhIYoo3JQUbkBx+", "DiamondBuyPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DiamondBuyPop", DiamondBuyPop = (_dec = ccclass('DiamondBuyPop'), _dec2 = property(Prefab), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec(_class = (_class2 = class DiamondBuyPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "list_view", _descriptor2, this);

          this._list = [];
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        onShow() {
          this._list = [];
          let listData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BuyDiamondsTable;

          for (let i = 0; i < listData.length; i += 3) {
            if (listData[i].ViewSpecial && !(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).isReview) {
              continue;
            }

            this._list.push(listData.slice(i, i + 3));
          }

          this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
        }

        onDestroy() {
          super.onDestroy();
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight() {
          return 250;
        }

        getCellIdentifer() {
          return "MallLayoutCell";
        }

        getCellView() {
          return instantiate(this.pfb_item).getComponent(_crd && MallLayoutCell === void 0 ? (_reportPossibleCrUseOfMallLayoutCell({
            error: Error()
          }), MallLayoutCell) : MallLayoutCell);
        }

        GetCellData(idx) {
          return {
            data: this._list[idx],
            view: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_Tab5
          };
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec3], {
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
//# sourceMappingURL=3c64870c1c7d6b28ce738bfae5b1e3cc5b756f51.js.map