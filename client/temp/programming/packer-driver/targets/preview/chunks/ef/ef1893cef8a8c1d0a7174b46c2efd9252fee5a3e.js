System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Prefab, InfiniteList, MallLayoutCell, ActivityData, tab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CombineGiftItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallLayoutCell(extras) {
    _reporterNs.report("MallLayoutCell", "../../shop/MallLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      InfiniteList = _unresolved_2.default;
    }, function (_unresolved_3) {
      MallLayoutCell = _unresolved_3.MallLayoutCell;
    }, function (_unresolved_4) {
      ActivityData = _unresolved_4.ActivityData;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b42323EwyhMobVSVdMpRRRI", "CombineGiftItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CombineGiftItem", CombineGiftItem = (_dec = ccclass('CombineGiftItem'), _dec2 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec3 = property(Prefab), _dec(_class = (_class2 = class CombineGiftItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "list_view", _descriptor, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor2, this);

          this._list = [];
          this.mallId = 0;
        }

        onShow(MallId) {
          this.mallId = MallId;
          var groupData = this.groupListData();
          this._list = groupData.data;
          this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight(idx) {
          return 330;
        }

        getCellIdentifer(idx) {
          return "MallLayoutCell";
        }

        getCellView(idx, identifer) {
          return instantiate(this.pfb_item).getComponent(_crd && MallLayoutCell === void 0 ? (_reportPossibleCrUseOfMallLayoutCell({
            error: Error()
          }), MallLayoutCell) : MallLayoutCell);
        }

        GetCellData(idx) {
          return {
            data: this._list[idx],
            view: (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_SpecialGiftTab1,
            viewName: this.mallId
          };
        } // 领取奖励之后刷新list


        refreshView() {
          this.list_view.Refresh();
        }

        groupListData() {
          var splitCount = 3;
          var result = [];
          var listData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getMallItemTabsById(this.mallId);

          for (var i = 0; i < listData.length; i += splitCount) {
            result.push(listData.slice(i, i + splitCount));
          }

          return {
            data: result,
            name: this.mallId
          };
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec3], {
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
//# sourceMappingURL=ef1893cef8a8c1d0a7174b46c2efd9252fee5a3e.js.map