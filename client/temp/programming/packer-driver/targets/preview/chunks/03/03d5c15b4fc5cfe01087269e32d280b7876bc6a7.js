System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, ViewPop, proto, ItemData, ItemPoolMgr, tab, EventMgr, Net, EquipData, ShowTips, UIMgr, LangMgr, ViewName, HeroDataControl, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, BagPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      ItemData = _unresolved_3.ItemData;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      Net = _unresolved_7.Net;
    }, function (_unresolved_8) {
      EquipData = _unresolved_8.EquipData;
    }, function (_unresolved_9) {
      ShowTips = _unresolved_9.ShowTips;
      UIMgr = _unresolved_9.UIMgr;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }, function (_unresolved_11) {
      ViewName = _unresolved_11.ViewName;
    }, function (_unresolved_12) {
      HeroDataControl = _unresolved_12.HeroDataControl;
    }, function (_unresolved_13) {
      RedMgr = _unresolved_13.RedMgr;
    }, function (_unresolved_14) {
      RedDotType = _unresolved_14.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d3cag+17lBN5dezx+e2SBT", "BagPop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BagPop", BagPop = (_dec = ccclass('BagPop'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = (_class2 = class BagPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "decomposeBtn", _descriptor, this);

          _initializerDefineProperty(this, "composeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "currNumLab", _descriptor3, this);

          _initializerDefineProperty(this, "totalNumLab", _descriptor4, this);

          _initializerDefineProperty(this, "havebtn_contentNode", _descriptor5, this);

          _initializerDefineProperty(this, "nobtn_contentNode", _descriptor6, this);

          _initializerDefineProperty(this, "capacityNode", _descriptor7, this);

          _initializerDefineProperty(this, "EmptyNode", _descriptor8, this);

          _initializerDefineProperty(this, "equipNumLab", _descriptor9, this);

          _initializerDefineProperty(this, "equipMaxNumLab", _descriptor10, this);

          this.bagDataMap = void 0;
          this.currBagType = 1;
          this.bagItemNodes = void 0;
        }

        //private equipItemNodes: Array<EquipmentItem>;
        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ItemChangePush, this.on_s2c_Msg_ItemChangePush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UseHeroPieceOneClickRsp, this.on_s2c_UseHeroPieceOneClickRsp, this);
        }

        on_s2c_UseHeroPieceOneClickRsp(msg) {
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
        } // onLoad(): void {
        //     // super.onLoad();
        // }


        start() {
          this.initBagData();
          this.bagItemNodes = []; // this.equipItemNodes=[];

          this.initBagView();
        }

        initBagData() {
          this.bagDataMap = new Map();
          var itemList = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getItems();

          for (var value of itemList) {
            var bagType = value.itemTable.BagType;

            if (bagType > (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_None && Number(value.num) > 0) {
              this.addByBagDataMap(bagType, value);
            }
          }

          var equips = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquips();

          for (var _value of equips) {
            if (!_value.isWear) {
              if (_value.itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).BagType.BagType_Equip) {
                this.addByBagDataMap((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).BagType.BagType_Equip, _value);
              } else if (_value.itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).BagType.BagType_Jade) {
                this.addByBagDataMap((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).BagType.BagType_Jade, _value);
              }
            }
          }

          this.sortBagData(Array.from(this.bagDataMap.keys()));
        }

        addByBagDataMap(type, info, isFind) {
          if (isFind === void 0) {
            isFind = false;
          }

          var list = this.bagDataMap.get(type);
          var isAdd = false;

          if (!list) {
            list = [];
            this.bagDataMap.set(type, list);
          }

          if (isFind) {
            var value = list.find((value, index) => {
              if (value.itemId == info.itemId) return value;
            });

            if (value) {
              value = info;
            } else {
              list.push(info);
              isAdd = true;
            }
          } else {
            list.push(info);
            isAdd = true;
          }

          return isAdd;
        }

        removeByBagData(bagType, itemId) {
          var list = this.bagDataMap.get(bagType);

          if (list) {
            var index = -1;
            index = list.findIndex(value => value.itemId == itemId);

            if (index >= 0) {
              list.splice(index, 1);
            }
          }
        }

        removeBagEquipData(id) {
          var list = this.bagDataMap.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Equip);

          if (list) {
            var index = -1;
            index = list.findIndex(value => Number(value.id) == id);

            if (index >= 0) {
              list.splice(index, 1);
            }
          }
        }

        sortBagData(bagTypes) {
          for (var key in bagTypes) {
            var list = this.bagDataMap.get(bagTypes[key]);

            if (list) {
              list.sort((a, b) => {
                return a.itemTable.Sort - b.itemTable.Sort;
              });
            }
          }
        }

        initBagView() {
          this.removeComItem();
          this.nobtn_contentNode.parent.parent.active = false;
          this.havebtn_contentNode.parent.parent.active = false;
          this.nobtn_contentNode.destroyAllChildren();
          this.havebtn_contentNode.destroyAllChildren();
          var list = this.bagDataMap.get(this.currBagType);
          this.EmptyNode.active = list ? list.length === 0 : true;

          for (var key in list) {
            var node = null;

            if (this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Equip || this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Fragment || this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Jade) {
              this.havebtn_contentNode.parent.parent.active = true;

              if (this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).BagType.BagType_Equip || this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).BagType.BagType_Jade) {
                node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(list[key], this.havebtn_contentNode);
              } else {
                node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(list[key], this.havebtn_contentNode);
              }
            } else {
              this.nobtn_contentNode.parent.parent.active = true;
              node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(list[key], this.nobtn_contentNode);
              var redNode = node.getChildByName("redDot");

              if (list[key].itemTable.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Box) {
                if (redNode) {
                  redNode.active = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
                    error: Error()
                  }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
                    error: Error()
                  }), RedDotType) : RedDotType).HeroBagRed, String(list[key].itemId));
                }
              } else {
                if (redNode) {
                  redNode.active = false;
                }
              }
            }

            this.bagItemNodes.push(node);
          }

          this.composeBtn.node.active = this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Fragment;
          this.decomposeBtn.node.active = this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Equip; // || this.currBagType == tab.BagType.BagType_Jade;

          if (this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Equip) {
            this.capacityNode.active = true;
            this.updateEquipNum();
          } else {
            this.capacityNode.active = false;
          }
        }

        updateEquipNum() {
          var list = this.bagDataMap.get(this.currBagType);
          this.equipNumLab.string = list ? list.length + "" : "0";
          this.equipMaxNumLab.string = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().EquipMaxNum + "";
        }

        onClickToggle(event, data) {
          console.log("data==", data);
          this.currBagType = Number(data);
          this.initBagView();
        }
        /**
         * 点击分解
         */


        onClickDecompose() {}
        /**
         * 点击一键合成
         */


        onClickCompose() {
          // 先判断当前是否有可以合成的碎片
          var list = this.bagDataMap.get((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Fragment);
          var composeCount = 0;

          if (!list) {
            return;
          }

          for (var i = 0; i < list.length; i++) {
            var data = list[i];
            var itemTab = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getByItemId(data.itemId);
            var needCount = 0;

            if (itemTab.itemTable.Quality === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemQuality.ItemQuality_Purple) {
              needCount = 30;
            } else if (itemTab.itemTable.Quality > (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemQuality.ItemQuality_Purple) {
              needCount = 50;
            }

            var count = Number(data.num);

            if (count >= needCount) {
              composeCount += Math.floor(count / needCount);
            }
          }

          if (composeCount > 0) {
            if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getHeroBagFull(composeCount)) {
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_herobag_1"));
              return;
            }

            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_UseHeroPieceOneClickReq();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.UseHeroPieceOneClickReq, msg);
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("CommonErrorCode_6"));
          }
        }

        onClickAddTestData() {
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FinishStageReq);
        }

        on_s2c_Msg_ItemChangePush(msg) {
          var isRefresh = false;
          var sortTyps = [];

          for (var value of msg.updatedItems) {
            var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(value.itemId);

            if (itemTab.Type != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Hero) {
              if (itemTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Equip) {//根据装备唯一di 获取装备item
              } else {
                var itemInfo = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getByItemId(value.itemId);
                var isSort = this.addByBagDataMap(itemTab.BagType, itemInfo, true);

                if (isSort) {
                  if (sortTyps.indexOf(itemTab.BagType) < 0) {
                    sortTyps.push(itemTab.BagType);
                  }
                }
              }

              if (itemTab.BagType == this.currBagType) {
                isRefresh = true;
              }
            }
          }

          for (var _value2 of msg.removedItems) {
            var _itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(_value2.itemId);

            if (_itemTab.Type != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Hero) {
              var _itemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(_value2.itemId);

              if (_itemTab2.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Equip) {
                //根据装备唯一di 获取装备item
                this.removeBagEquipData(Number(_value2.id));
              } else {
                this.removeByBagData(_itemTab2.BagType, _value2.itemId);
              }

              if (_itemTab2.BagType == this.currBagType) {
                isRefresh = true;
              }
            }
          }

          for (var _value3 of msg.updatedItems) {
            var _itemTab3 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(_value3.itemId);

            var itemNum = _value3.num;

            if (itemNum === 0) {
              this.removeByBagData(_itemTab3.BagType, _value3.itemId);
            }

            if (_itemTab3.BagType == this.currBagType) {
              isRefresh = true;
            }
          } //刷新装备数据


          for (var _value4 of msg.updatedEquipments) {
            var info = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
              error: Error()
            }), EquipData) : EquipData).ins.getEquipInfoById(_value4.id);

            if (!info.isWear) {
              this.addByBagDataMap((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).BagType.BagType_Equip, info);
            }

            if (this.currBagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Equip) {
              isRefresh = true;
            }

            if (sortTyps.indexOf((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Equip) < 0) {
              sortTyps.push((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).BagType.BagType_Equip);
            }
          }

          if (sortTyps.length > 0) {
            this.sortBagData(sortTyps);
          }

          if (isRefresh) {
            this.initBagView();
          } // this.initBagView();

        }

        onDestroy() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

        removeComItem() {
          for (var key in this.bagItemNodes) {
            if (this.bagItemNodes[key].name == "EquipmentItem") {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.bagItemNodes[key]);
            } else {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(this.bagItemNodes[key]);
            }
          }

          this.bagItemNodes = [];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "decomposeBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "composeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currNumLab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalNumLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "havebtn_contentNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nobtn_contentNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "capacityNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "EmptyNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "equipNumLab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "equipMaxNumLab", [_dec11], {
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
//# sourceMappingURL=03d5c15b4fc5cfe01087269e32d280b7876bc6a7.js.map