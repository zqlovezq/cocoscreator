System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Prefab, ComponentBase, EventMgr, proto, InfiniteList, MallLayoutCell, tab, MALLNAME, OpenFunctionMgr, UIMgr, MallDataMgr, setTextTime, ActivityMainView, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, NewHandGiftView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallLayoutCell(extras) {
    _reporterNs.report("MallLayoutCell", "../../shop/MallLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../../shop/MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityMainView(extras) {
    _reporterNs.report("ActivityMainView", "./ActivityMainView", _context.meta, extras);
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
      Label = _cc.Label;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      InfiniteList = _unresolved_4.default;
    }, function (_unresolved_5) {
      MallLayoutCell = _unresolved_5.MallLayoutCell;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      MALLNAME = _unresolved_7.MALLNAME;
    }, function (_unresolved_8) {
      OpenFunctionMgr = _unresolved_8.OpenFunctionMgr;
    }, function (_unresolved_9) {
      UIMgr = _unresolved_9.UIMgr;
    }, function (_unresolved_10) {
      MallDataMgr = _unresolved_10.MallDataMgr;
    }, function (_unresolved_11) {
      setTextTime = _unresolved_11.setTextTime;
    }, function (_unresolved_12) {
      ActivityMainView = _unresolved_12.ActivityMainView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "27917s4W2NK+7DnMG7+U8xh", "NewHandGiftView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'log', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewHandGiftView", NewHandGiftView = (_dec = ccclass('NewHandGiftView'), _dec2 = property(Prefab), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec4 = property(Label), _dec(_class = (_class2 = class NewHandGiftView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "list_view", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_time", _descriptor3, this);

          this._shop_view = new Map();
          this._view_name = (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NONE;
          this._view_type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_None;
          this._list = [];
          this._countDown = 0;
        }

        register() {
          // 购买固定商品
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
        }

        onShow(mallId) {
          this._view_name = mallId;

          this._shop_view.clear();

          for (var k = 0; k < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabe.length; k++) {
            var mallTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallItemTabe[k];

            if (mallTab.MallId === mallId) {
              // 判定开启条件
              if (mallTab.OpenFunction) {
                var isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(mallTab.OpenFunction);

                if (!isOpen) {
                  continue;
                }
              }

              if (this._shop_view.has(mallId)) {
                var arr = this._shop_view.get(mallId);

                this._shop_view.set(mallId, arr.concat(mallTab));
              } else {
                this._shop_view.set(mallId, [mallTab]);
              }
            }
          }

          this._view_type = mallId == (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall ? (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_NewPlayerMall : (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_NewPlayerMall2;
          this.initView(true);
          this._countDown = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopExpireTime(mallId);
          this.updateTime();
          this.unschedule(this.updateTime);
          this.schedule(this.updateTime, 1);
        }

        onDestroy() {
          super.onDestroy();
        }

        initView(isInit) {
          var groupData = this.groupListData();
          this._list = groupData.data;

          if (isInit) {
            this.list_view.Init({
              getCellNumber: this.getCellCount.bind(this),
              getCellSize: this.getCellHeight.bind(this),
              getCellIdentifer: this.getCellIdentifer.bind(this),
              getCellView: this.getCellView.bind(this),
              getCellData: this.GetCellData.bind(this)
            });
          } else {
            this.list_view.Reload(false, true);
          }
        }

        getCellCount() {
          return this._list.length;
        }

        getCellHeight() {
          return 330;
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
            view: this._view_type,
            viewName: this._view_name
          };
        }

        groupListData() {
          var splitCount = 4;
          var result = [];

          var listData = this._shop_view.get(this._view_name);

          for (var i = 0; i < listData.length; i += splitCount) {
            result.push(listData.slice(i, i + splitCount));
          }

          return {
            data: result,
            name: this._view_name
          };
        }

        on_s2c_BuyFixedShopCommodityRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.list_view.Refresh();
          var view = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView('ActivityMainView');
          view.getComponent(_crd && ActivityMainView === void 0 ? (_reportPossibleCrUseOfActivityMainView({
            error: Error()
          }), ActivityMainView) : ActivityMainView).refreshHandGiftRed();
        }

        updateTime() {
          // 获取刷新周期
          this._countDown--;

          if (this._countDown <= 0) {
            this._countDown = 0;
            this.unschedule(this.updateTime);
          } else {
            this.lbl_time.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this._countDown);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_time", [_dec4], {
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
//# sourceMappingURL=9c88d8582d1f60f71ae7dabe5054ab13452f4ec3.js.map