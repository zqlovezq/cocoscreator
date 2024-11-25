System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Prefab, Toggle, tab, InfiniteList, MallLayoutCell, proto, EventMgr, ComponentBase, OpenFunctionMgr, MALLNAME, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CycleGiftView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallLayoutCell(extras) {
    _reporterNs.report("MallLayoutCell", "../../shop/MallLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      InfiniteList = _unresolved_3.default;
    }, function (_unresolved_4) {
      MallLayoutCell = _unresolved_4.MallLayoutCell;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      ComponentBase = _unresolved_6.ComponentBase;
    }, function (_unresolved_7) {
      OpenFunctionMgr = _unresolved_7.OpenFunctionMgr;
    }, function (_unresolved_8) {
      MALLNAME = _unresolved_8.MALLNAME;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "42865p4VdhOt41SdxEyK6M1", "CycleGiftView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'log', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CycleGiftView", CycleGiftView = (_dec = ccclass('CycleGiftView'), _dec2 = property(Prefab), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec4 = property(Node), _dec(_class = (_class2 = class CycleGiftView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "list_view", _descriptor2, this);

          _initializerDefineProperty(this, "node_toggles", _descriptor3, this);

          this._view_type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_SpecialGiftTab1;
          this._view_name = (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).DailyGift;
          this._shop_view = new Map();
          this._list = [];
          this._args = null;
        }

        register() {
          // 购买固定商品
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
        }

        onShow(args) {
          this._args = args;

          this._shop_view.clear();

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallTable.length; i++) {
            var _mallTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallTable[i];
            var mallId = _mallTab.MallId;

            if (_mallTab.MallType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallType.MallType_SpecialGift) {
              // 特惠礼包
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
            }
          }

          this._view_type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_SpecialGiftTab1;
          this._view_name = (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).DailyGift;

          if (Array.isArray(this._args)) {
            if (this._args.length > 1) {
              this.node_toggles.getChildByName("Toggle" + this._args[1]).getComponent(Toggle).isChecked = true;
              this._view_name = 50 + this._args[1];
            } else {
              this.node_toggles.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
            }
          }

          this.initView(true);
        }

        initView(isInit) {
          var groupData = this.groupListData();
          this._list = groupData.data;
          this._view_name = groupData.name;

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

        onDestroy() {
          super.onDestroy();
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

        on_s2c_BuyFixedShopCommodityRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.list_view.Refresh();
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

        clickSwitchView(e, view_type) {
          if (Number(view_type) == this._view_name) {
            return;
          }

          this._view_name = Number(view_type);
          this.initView(false);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_toggles", [_dec4], {
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
//# sourceMappingURL=648c21249b94a96417e40170b3c68627691f00a7.js.map