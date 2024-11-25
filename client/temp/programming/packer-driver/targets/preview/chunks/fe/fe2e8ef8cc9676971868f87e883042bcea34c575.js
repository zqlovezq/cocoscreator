System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, Toggle, ViewPop, InfiniteList, MallLayoutCell, tab, MallTabItem, proto, Net, EventMgr, getTimeUntilNextDay, getTimeUntilNextMonth, getTimeUntilNextWeek, setTextTime, ViewName, ShowItemNotEnoughTips, ShowTips, UIMgr, RoleData, MallDataMgr, ResourceItem, ItemData, OpenFunctionMgr, MALLNAME, LangMgr, Global, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, MallMainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallLayoutCell(extras) {
    _reporterNs.report("MallLayoutCell", "./MallLayoutCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallTabItem(extras) {
    _reporterNs.report("MallTabItem", "./MallTabItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeUntilNextDay(extras) {
    _reporterNs.report("getTimeUntilNextDay", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeUntilNextMonth(extras) {
    _reporterNs.report("getTimeUntilNextMonth", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetTimeUntilNextWeek(extras) {
    _reporterNs.report("getTimeUntilNextWeek", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "./MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceItem(extras) {
    _reporterNs.report("ResourceItem", "../common/ResourceItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      InfiniteList = _unresolved_3.default;
    }, function (_unresolved_4) {
      MallLayoutCell = _unresolved_4.MallLayoutCell;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      MallTabItem = _unresolved_6.MallTabItem;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      Net = _unresolved_7.Net;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      getTimeUntilNextDay = _unresolved_9.getTimeUntilNextDay;
      getTimeUntilNextMonth = _unresolved_9.getTimeUntilNextMonth;
      getTimeUntilNextWeek = _unresolved_9.getTimeUntilNextWeek;
      setTextTime = _unresolved_9.setTextTime;
    }, function (_unresolved_10) {
      ViewName = _unresolved_10.ViewName;
    }, function (_unresolved_11) {
      ShowItemNotEnoughTips = _unresolved_11.ShowItemNotEnoughTips;
      ShowTips = _unresolved_11.ShowTips;
      UIMgr = _unresolved_11.UIMgr;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }, function (_unresolved_13) {
      MallDataMgr = _unresolved_13.MallDataMgr;
    }, function (_unresolved_14) {
      ResourceItem = _unresolved_14.ResourceItem;
    }, function (_unresolved_15) {
      ItemData = _unresolved_15.ItemData;
    }, function (_unresolved_16) {
      OpenFunctionMgr = _unresolved_16.OpenFunctionMgr;
    }, function (_unresolved_17) {
      MALLNAME = _unresolved_17.MALLNAME;
    }, function (_unresolved_18) {
      LangMgr = _unresolved_18.LangMgr;
    }, function (_unresolved_19) {
      Global = _unresolved_19.Global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5c98KzoDxG457wYiR6+vgp", "MallMainView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MallMainView", MallMainView = (_dec = ccclass('MallMainView'), _dec2 = property(Prefab), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec4 = property(_crd && MallTabItem === void 0 ? (_reportPossibleCrUseOfMallTabItem({
        error: Error()
      }), MallTabItem) : MallTabItem), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(_crd && ResourceItem === void 0 ? (_reportPossibleCrUseOfResourceItem({
        error: Error()
      }), ResourceItem) : ResourceItem), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = class MallMainView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "list_view", _descriptor2, this);

          _initializerDefineProperty(this, "node_MallTabItem", _descriptor3, this);

          _initializerDefineProperty(this, "node_vocation", _descriptor4, this);

          _initializerDefineProperty(this, "node_challenge", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_daily_time", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_count_time", _descriptor7, this);

          _initializerDefineProperty(this, "node_daily_refresh", _descriptor8, this);

          _initializerDefineProperty(this, "node_time", _descriptor9, this);

          _initializerDefineProperty(this, "node_free_btn", _descriptor10, this);

          _initializerDefineProperty(this, "node_nofree_btn", _descriptor11, this);

          _initializerDefineProperty(this, "resource_item", _descriptor12, this);

          _initializerDefineProperty(this, "node_vocation_toggle", _descriptor13, this);

          _initializerDefineProperty(this, "node_challenge_toggle", _descriptor14, this);

          this._view_type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_None;
          this._view_name = (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NONE;
          this._shop_view = new Map();
          this._cost_daily = new Map();
          this._daily_shop_data = null;
          this._list = [];
          this._vacation = -1;
          this._countDown = 0;
          this._dailyCountDown = 0;
        }

        register() {
          // 一键购买每日商品
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyDailyShopCommodityOneClickRsp, this.on_s2c_BuyDailyShopCommodityOneClickRsp, this); // 购买每日商品

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyDailyShopCommodityRsp, this.on_s2c_BuyDailyShopCommodityRsp, this); // 购买固定商品

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this); // 一键刷新每日奖励

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RefreshDailyShopRsp, this.on_s2c_RefreshDailyShopRsp, this);
        }

        onShow() {
          this._daily_shop_data = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getDailyShopData();

          if (this.openData) {
            if (typeof this.openData === 'number') {
              this._view_type = this.openData;

              if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).MallTab.MallTab_Tab2 && (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.getView("HeroResolvePop")) {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.hideView("HeroResolvePop");
              }
            } else if (typeof this.openData === 'object') {
              this._view_type = this.openData[0];
              this._vacation = this.openData[1];
            }
          }

          this.createShopBaseData();

          if (this._vacation > 0) {
            this.refreshView(true, this._vacation);
          } else {
            this.refreshView(true);
          }
        } // 刷新每日奖励


        on_s2c_RefreshDailyShopRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.initDailyShop(msg);
          this._daily_shop_data = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getDailyShopData();

          this._shop_view.set((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).DailyShop, this._daily_shop_data.slots);

          this.refreshView(false);
        } // 购买固定商品


        on_s2c_BuyFixedShopCommodityRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.list_view.Refresh();
        } // 一键购买商品


        on_s2c_BuyDailyShopCommodityOneClickRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });

          for (var i = 0; i < this._daily_shop_data.slots.length; i++) {
            var slot = this._daily_shop_data.slots[i];

            if (slot.commodityId === 1000) {
              continue;
            }

            slot.isBought = true;
          }

          var groupData = this.groupListData(this._view_type);
          this._list = groupData.data;
          this.list_view.Refresh();
        } // 购买每日商品


        on_s2c_BuyDailyShopCommodityRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });

          for (var i = 0; i < this._daily_shop_data.slots.length; i++) {
            var slot = this._daily_shop_data.slots[i];

            if (slot.index === msg.index) {
              slot.isBought = true;
              break;
            }
          }

          var groupData = this.groupListData(this._view_type);
          this._list = groupData.data;
          this.list_view.Refresh();
        }

        createShopBaseData() {
          // 根据页签类型创建 Toggle和列表数据
          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallTable.length; i++) {
            var mallTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallTable[i];
            var mallName = mallTab.MallId; // 创建职业 遣散信息

            for (var k = 0; k < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallItemTabe.length; k++) {
              var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().MallItemTabe[k];

              if (itemTab.MallId === mallName) {
                if (this._shop_view.has(mallName)) {
                  var arr = this._shop_view.get(mallName);

                  this._shop_view.set(mallName, arr.concat(itemTab));
                } else {
                  this._shop_view.set(mallName, [itemTab]);
                }
              }
            } // 创建每日商店信息


            if (mallTab.MallTab === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_Tab1) {
              this._shop_view.set(mallName, this._daily_shop_data.slots);
            } else if (mallTab.MallTab === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_Tab5) {
              this._shop_view.set(mallName, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().BuyDiamondsTable);
            }
          } // 根据页签显示toggle


          var toggleArr = [];
          Object.keys((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab).forEach(key => {
            var _key = Number(key);

            if (!isNaN(_key) && _key && _key !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_SpecialGiftTab1) {
              toggleArr[key] = -1;

              for (var _i = 0; _i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().MallTable.length; _i++) {
                var malltab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().MallTable[_i];

                var isOpen = false;

                if (malltab.Function) {
                  isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                    error: Error()
                  }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen(malltab.Function);
                }

                if (isOpen && malltab.MallTab === _key) {
                  toggleArr[key] = _key;
                  break;
                }
              }
            }
          });

          for (var _i2 = 0; _i2 < toggleArr.length; _i2++) {
            if (toggleArr[_i2] >= 0) {
              if (!this.openData) {
                this._view_type = toggleArr[_i2];
              }

              break;
            }
          }

          this.node_MallTabItem.initData(toggleArr);
        }

        refreshView(isInit, mallName) {
          var groupData = this.groupListData(this._view_type, mallName);
          this._list = groupData.data;
          this._view_name = groupData.name;

          if (isInit) {
            this.node_MallTabItem.node.getChildByName("tab_node").getChildByName("Toggle" + this._view_type).getComponent(Toggle).isChecked = true;
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

          this.node_vocation.active = this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab3;
          this.node_challenge.active = this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab4;

          if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab4) {
            this.node_challenge_toggle.getChildByName("Toggle2").active = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_Association);

            if (isInit) {
              if (this._vacation === 11) {
                this.node_challenge_toggle.getChildByName("Toggle2").getComponent(Toggle).isChecked = true;
              } else if (this._vacation === 9) {
                this.node_challenge_toggle.getChildByName("Toggle3").getComponent(Toggle).isChecked = true;
              }
            }
          }

          if (!mallName) {
            if (this.node_vocation.active) {
              this._vacation = 2;
              this.node_vocation_toggle.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
            }

            if (this.node_challenge.active) {
              this._vacation = 8;
              this.node_challenge_toggle.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
            }
          } // 根据viewName创建资源


          this.setResourceItem();
          this.refreshExtraData();
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
            view: this._view_type,
            viewName: this._view_name
          };
        }

        groupListData(type, mallName) {
          var splitCount = this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab5 ? 3 : 5;
          var mallTab = null;

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallTable.length; i++) {
            var _mallTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MallTable[i];
            var _MallTab = _mallTabData.MallTab;

            if (type === _MallTab) {
              mallTab = _mallTabData;
              break;
            }
          }

          var result = [];
          var listData = this.getMallItemTabByType(mallName ? mallName : mallTab.MallId); // 如果当前是每日商店 排序买了的排在后面

          if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab1) {
            listData.sort((slot1, slot2) => {
              return slot1.isBought - slot2.isBought;
            });
          }

          for (var _i3 = 0; _i3 < listData.length; _i3 += splitCount) {
            if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_Tab5 && listData[_i3].ViewSpecial && !(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
              error: Error()
            }), Global) : Global).isReview) {
              continue;
            }

            result.push(listData.slice(_i3, _i3 + splitCount));
          }

          return {
            data: result,
            name: mallName ? mallName : mallTab.MallId
          };
        } // 通过type获得表中所有的数据


        getMallItemTabByType(type) {
          return this._shop_view.get(type);
        }

        clickSwitchShop(e, type) {
          if (this._view_type === Number(type)) {
            return;
          }

          this._view_type = Number(type);
          this.refreshView(false);
        }

        clickSwitchVocation(e, type) {
          // this._view_type = tab.MallTab.MallTab_Tab2;
          if (this._vacation == Number(type)) {
            return;
          }

          this._vacation = Number(type);
          this.refreshView(false, Number(type));
        }

        onDestroy() {
          super.onDestroy();
        } // 刷新每日商店数据


        refreshExtraData() {
          this.node_daily_refresh.active = this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab1;
          this.node_free_btn.parent.active = this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab1;
          this.node_time.active = this._view_type !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab5;

          if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab1) {
            // 上次免费刷新时间
            var freeRefreshTime = this._daily_shop_data.lastFreeRefreshTime; // 判断是否有倒计时

            var countData = this.getDailyCountdown();

            if (freeRefreshTime && countData.isCountDown) {
              // 有免费刷新时间
              this.node_daily_refresh.active = true;
              this._dailyCountDown = countData.count;
              this.updateDailyTime();
              this.unschedule(this.updateDailyTime);
              this.schedule(this.updateDailyTime, 1);
            } else {
              this.node_daily_refresh.active = false;
            } // 判断是否有免费次数


            var data = this.getDailyShopData();
            var freeBtn = this.node_free_btn;
            var noFreeBtn = this.node_nofree_btn;
            freeBtn.active = data.isFree;
            noFreeBtn.active = data.isNoFree;

            if (data.isNoFree) {
              var numTxt = noFreeBtn.getChildByName("num_Layout").getChildByName("num_txt").getComponent(Label);
              numTxt.string = String(data.needDiamond);
            }

            this._countDown = (_crd && getTimeUntilNextDay === void 0 ? (_reportPossibleCrUseOfgetTimeUntilNextDay({
              error: Error()
            }), getTimeUntilNextDay) : getTimeUntilNextDay)();
            this.updateTime();
            this.unschedule(this.updateTime);
            this.schedule(this.updateTime, 1);
          } else if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab2) {
            this._countDown = (_crd && getTimeUntilNextWeek === void 0 ? (_reportPossibleCrUseOfgetTimeUntilNextWeek({
              error: Error()
            }), getTimeUntilNextWeek) : getTimeUntilNextWeek)();
            this.updateTime();
            this.unschedule(this.updateTime);
            this.schedule(this.updateTime, 1);
          } else if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab3 || this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab4) {
            this._countDown = (_crd && getTimeUntilNextMonth === void 0 ? (_reportPossibleCrUseOfgetTimeUntilNextMonth({
              error: Error()
            }), getTimeUntilNextMonth) : getTimeUntilNextMonth)();
            this.updateTime();
            this.unschedule(this.updateTime);
            this.schedule(this.updateTime, 1);
          } else if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab5) {}
        }

        updateTime() {
          // 获取刷新周期
          this._countDown--;

          if (this._countDown <= 0) {
            this._countDown = 0;
            this.unschedule(this.updateTime);
          } else {
            this.lbl_count_time.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this._countDown);
          }
        }

        updateDailyTime() {
          // 巡逻收益时间
          // const countData = this.getDailyCountdown();
          this._dailyCountDown--; // 已经达到最大收益

          if (this._dailyCountDown <= 0) {
            console.log("\u5012\u8BA1\u65F6\u7ED3\u675F");
            this._dailyCountDown = 0;
            this.node_daily_refresh.active = false;
            this.unschedule(this.updateDailyTime);
          } else {
            this.lbl_daily_time.string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
              error: Error()
            }), setTextTime) : setTextTime)(this._dailyCountDown);
          }
        } // 获取当前每日倒计时，是否有倒计时


        getDailyCountdown() {
          var curTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          var timeCount = curTime - Number(this._daily_shop_data.lastFreeRefreshTime);
          var maxTime = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().DailyShopFreeRefreshCD;
          return {
            count: maxTime - timeCount,
            isCountDown: maxTime > timeCount
          };
        }

        clickDailyRefresh() {
          var data = this.getDailyShopData();

          if (this._dailyCountDown && data.isFree) {
            //ShowTips("刷新冷却时间未结束");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_mall_1"));
            return;
          }

          var diamond = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.diamond;

          if (data.isFree || data.isNoFree) {
            if (data.needDiamond > diamond) {
              (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                error: Error()
              }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
              return;
            }

            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_RefreshDailyShopReq();
            msg.type = data.isFree ? 0 : 1;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.RefreshDailyShopReq, msg);
          } else {
            //ShowTips("刷新次数使用完");
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_mall_2"));
          }
        } // 刷新每日商店


        getDailyShopData() {
          // 免费刷新次数
          var freeRefreshTimes = this._daily_shop_data.freeRefreshTimes; // 付费刷新次数

          var notFreeRefreshTimes = this._daily_shop_data.notFreeRefreshTimes; // 最大免费刷新次数

          var maxFreeRefreshTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().DailyShopFreeRefreshCount; // 最大付费刷新次数

          var maxNoFreeRefreshTimes = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().DailyShopBuyRefreshCount + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getPrivilegeValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).VipBonus.VipBonus_DailyShopRefresh);
          ; // 每次刷新需要的钻石

          var DailyShopBuyCostDiamonds = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().DailyShopBuyCostDiamonds;
          var data = {
            isFree: false,
            isNoFree: false,
            needDiamond: 0
          };

          if (maxFreeRefreshTimes > freeRefreshTimes && this._dailyCountDown == 0) {
            data.isFree = true;
          } else {
            if (notFreeRefreshTimes >= maxNoFreeRefreshTimes) {} else {
              // 显示付费刷新按钮+需要的钻石
              data.isNoFree = true;
              var needDiamond = DailyShopBuyCostDiamonds[notFreeRefreshTimes] ? DailyShopBuyCostDiamonds[notFreeRefreshTimes] : DailyShopBuyCostDiamonds[DailyShopBuyCostDiamonds.length - 1];
              data.needDiamond = needDiamond;
            }
          }

          return data;
        } // 一键购买每日商店


        onClickBuyDailyShop() {
          // 判断一键购买的钻石是否充足
          var canBuy = false;
          var materialEnough = true;
          var noEnouthItem = 0;

          this._cost_daily.clear();

          for (var i = 0; i < this._daily_shop_data.slots.length; i++) {
            var slot = this._daily_shop_data.slots[i];

            if (slot.commodityId === 1000) {
              continue;
            }

            if (!slot.isBought) {
              canBuy = true;

              var _dailyShopData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().DailyShopItemTableById.getValue(slot.commodityId);

              var _CostItemId = _dailyShopData.CostItemId;
              var _CostItemNum = _dailyShopData.CostItemNum;

              if (this._cost_daily.has(_CostItemId)) {
                this._cost_daily.set(_CostItemId, this._cost_daily.get(_CostItemId) + _CostItemNum);
              } else {
                this._cost_daily.set(_CostItemId, _CostItemNum);
              }
            }
          }

          this._cost_daily.forEach((value, key) => {
            var itemCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(key);

            if (itemCount < value) {
              noEnouthItem = key;
              materialEnough = false;
            }
          });

          if (!materialEnough) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(noEnouthItem);
            return;
          }

          if (canBuy && materialEnough) {
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_BuyDailyShopCommodityOneClickReq();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.BuyDailyShopCommodityOneClickReq, msg);
          }
        }

        setResourceItem() {
          var mallName = this._view_name;

          switch (mallName) {
            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).AssassinShop:
            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).ArcherShop:
            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).PriestShop:
            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).CasterShop:
            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).WarriorShop:
              this.resource_item.setItemIds([81]);
              break;

            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).DailyShop:
              this.resource_item.setItemIds([1]);
              break;

            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).BossShop:
              this.resource_item.setItemIds([83]);
              break;

            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).DismissalShop:
              this.resource_item.setItemIds([5]);
              break;

            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).DiamondShop:
              this.resource_item.setItemIds([]);
              break;

            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).GuildShop:
              this.resource_item.setItemIds([84]);
              break;

            case (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
              error: Error()
            }), MALLNAME) : MALLNAME).PvpShop:
              this.resource_item.setItemIds([86]);
              break;

            default:
              break;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_MallTabItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_vocation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_challenge", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_daily_time", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_count_time", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_daily_refresh", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_time", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_free_btn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_nofree_btn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "resource_item", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_vocation_toggle", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_challenge_toggle", [_dec15], {
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
//# sourceMappingURL=fe2e8ef8cc9676971868f87e883042bcea34c575.js.map