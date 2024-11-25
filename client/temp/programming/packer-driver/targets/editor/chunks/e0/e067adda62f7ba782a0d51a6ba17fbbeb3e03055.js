System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Func, RoleData, EventMgr, ItemInfo, LocalEvent, tab, RoleControl, RedMgr, RedDotType, RareBookData, ChannelMgr, P8PostEventName, AssociationData, ItemData, _crd, ccclass, property, DiamondId, GoldId;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "./ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "../role/RoleControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfP8PostEventName(extras) {
    _reporterNs.report("P8PostEventName", "../../../channel/ChannelDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../association/AssociationData", _context.meta, extras);
  }

  _export("ItemData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Func = _unresolved_2.Func;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      LocalEvent = _unresolved_6.LocalEvent;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      RoleControl = _unresolved_8.RoleControl;
    }, function (_unresolved_9) {
      RedMgr = _unresolved_9.RedMgr;
    }, function (_unresolved_10) {
      RedDotType = _unresolved_10.RedDotType;
    }, function (_unresolved_11) {
      RareBookData = _unresolved_11.RareBookData;
    }, function (_unresolved_12) {
      ChannelMgr = _unresolved_12.ChannelMgr;
    }, function (_unresolved_13) {
      P8PostEventName = _unresolved_13.P8PostEventName;
    }, function (_unresolved_14) {
      AssociationData = _unresolved_14.AssociationData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "717367TmHhLILszvVDwYSSY", "ItemData", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); //配置表内货币id

      DiamondId = 1;
      GoldId = 2;
      /** 道具数据 */

      _export("ItemData", ItemData = class ItemData {
        constructor() {
          this.items = [];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new ItemData();
          }

          return this._instance;
        }

        purge() {
          this.items.length = 0;
        }

        initData() {
          // let items=RoleData.ins.simpleItems;
          this.adds((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.simpleItems);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Bag_Compose);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroBagRed);
        }

        adds(list) {
          if (list.length == 0) {
            return;
          }

          let updateItemIds = [];
          let isHaveStamina = false;
          let isHaveChip = false;
          let isUpdateBookRed = false;
          let isBox = false;

          for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let iteminfo = this.getByItemId(v.itemId);

            if (v.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).CurrencyType.CurrencyType_DailyActivity) {
              let count = iteminfo ? iteminfo.num : 0;

              if (count < 40 && v.num >= 40) {
                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                  error: Error()
                }), P8PostEventName) : P8PostEventName).daily_40);
              }

              if (count < 100 && v.num >= 100) {
                (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
                  error: Error()
                }), ChannelMgr) : ChannelMgr).postEvent((_crd && P8PostEventName === void 0 ? (_reportPossibleCrUseOfP8PostEventName({
                  error: Error()
                }), P8PostEventName) : P8PostEventName).daily_100);
              }
            }

            if (v.itemId === 84) {
              const guildData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
                error: Error()
              }), AssociationData) : AssociationData).ins.getAssocitionSimpleInfo();

              if (guildData) {
                if (iteminfo) {
                  guildData.exp += v.num - iteminfo.num;
                } else {
                  guildData.exp += v.num;
                }
              }
            }

            if (iteminfo == null) {
              iteminfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              iteminfo.merge(v);
              this.items.push(iteminfo);
            }

            this.merge(iteminfo, v);
            updateItemIds.push(iteminfo.itemId);

            if (iteminfo.itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Fragment) {
              isHaveChip = true;
            }

            if (!isUpdateBookRed) {
              isUpdateBookRed = iteminfo.itemId >= 25000 && iteminfo.itemId < 30000 || iteminfo.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).CurrencyType.CurrencyType_Gold || iteminfo.itemId === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
            }

            if (v.itemId == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).CurrencyType.CurrencyType_Stamina) {
              isHaveStamina = true;
            }

            if (iteminfo.itemTable.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Box) {
              isBox = true;
            }
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Item_Update, updateItemIds);

          if (isHaveChip) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Bag_Compose);
          }

          if (isUpdateBookRed) {
            (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
              error: Error()
            }), RareBookData) : RareBookData).ins.updateBookCanUpLevelAndStar();
          }

          if (isHaveStamina) {
            (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
              error: Error()
            }), RoleControl) : RoleControl).ins.requestStaminaInfo();
          }

          if (isBox) {
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).HeroBagRed);
          }
        }

        merge(itemInfo, item) {
          //目前只需要同步数量
          itemInfo.num = item.num;
          /** 同步角色身上常用货币数量 */

          if (item.itemId == DiamondId) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.diamond = Number(item.num);
          } else if (item.itemId == GoldId) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.gold = Number(item.num);
          }
        }

        removes(ids) {}

        getByItemId(id) {
          return (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).forBy(this.items, "itemId", id);
        }

        getItemInfosByType() {}

        remove(id) {
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).removeBy(this.items, "itemId", id);
        }
        /** 道具数量 包含货币 */


        getCount(id) {
          let item = this.getByItemId(id);
          return Number(item && item.num || 0);
        }

        getItems() {
          return this.items;
        }
        /**
         * 判断道具是否充足
         * @param items 
         */


        isItemsEnough(items) {
          for (let key in items) {
            let currItem = this.getByItemId(items[key].itemId);

            if (!currItem || currItem.num < items[key].num) {
              return false;
            }
          }

          return true;
        }
        /**
         * 判断道具是否充足
         * @param items 
         */


        isItemsEnoughByList(itemIds, counts) {
          for (let key in itemIds) {
            let currNum = this.getCount(itemIds[key]);

            if (currNum < counts[key]) {
              return itemIds[key];
            }
          }

          return 0;
        }

      });

      ItemData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e067adda62f7ba782a0d51a6ba17fbbeb3e03055.js.map