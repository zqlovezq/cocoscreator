System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, instantiate, NodePool, Prefab, v3, LoadResAsync, CommonItem, tab, HeroItem, HeroInfo, EquipmentItem, WeaponItem, ItemInfo, EquipInfo, _dec, _class, _class2, _crd, ccclass, property, ItemPoolMgr;

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "./CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "./HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentItem(extras) {
    _reporterNs.report("EquipmentItem", "./EquipmentItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "./ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      LoadResAsync = _unresolved_2.LoadResAsync;
    }, function (_unresolved_3) {
      CommonItem = _unresolved_3.CommonItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      HeroItem = _unresolved_5.HeroItem;
    }, function (_unresolved_6) {
      HeroInfo = _unresolved_6.HeroInfo;
    }, function (_unresolved_7) {
      EquipmentItem = _unresolved_7.EquipmentItem;
    }, function (_unresolved_8) {
      WeaponItem = _unresolved_8.WeaponItem;
    }, function (_unresolved_9) {
      ItemInfo = _unresolved_9.ItemInfo;
    }, function (_unresolved_10) {
      EquipInfo = _unresolved_10.EquipInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff1b4J2/kpPYqARRAaW0Yn1", "ItemPoolMgr", undefined);

      __checkObsolete__(['_decorator', 'Asset', 'Component', 'error', 'instantiate', 'Node', 'NodePool', 'Prefab', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemPoolMgr", ItemPoolMgr = (_dec = ccclass('ItemPoolMgr'), _dec(_class = (_class2 = class ItemPoolMgr {
        constructor() {
          this._itemCommonPool = void 0;
          this._itemHeroPool = void 0;
          this._equipmentItemPool = void 0;
          this._bookItemPool = void 0;
          this.conmmonPrefab = void 0;
          this.equipmentPrefab = void 0;
          this.heroPrefab = void 0;
          this.bookPrefab = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new ItemPoolMgr();

            this._instance.initPool();
          }

          return this._instance;
        }

        initPool() {
          this._itemCommonPool = new NodePool();
          this._itemHeroPool = new NodePool();
          this._equipmentItemPool = new NodePool();
          this._bookItemPool = new NodePool();
        }

        async loadItemPrefab() {
          this.heroPrefab = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
            error: Error()
          }), LoadResAsync) : LoadResAsync)('prefab/common/HeroItem', Prefab);
          this.conmmonPrefab = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
            error: Error()
          }), LoadResAsync) : LoadResAsync)('prefab/common/CommonItem', Prefab);
          this.equipmentPrefab = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
            error: Error()
          }), LoadResAsync) : LoadResAsync)('prefab/common/EquipmentItem', Prefab);
          this.bookPrefab = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
            error: Error()
          }), LoadResAsync) : LoadResAsync)('prefab/common/WeaponItem', Prefab);
          this.addRef(this.heroPrefab);
          this.addRef(this.conmmonPrefab);
          this.addRef(this.equipmentPrefab);
          this.addRef(this.bookPrefab);
        }

        addRef(ass) {
          if (ass) {
            ass.addRef();
          }
        }

        createRewadItem(reward, parentNode, isTouch = true) {
          let itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(reward.itemId);

          if (!itemTab) {
            error("itemTabel 未配置---", reward.itemId);
            return;
          }

          let Type = itemTab.Type;
          let node;

          switch (Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Hero:
              let info = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
                error: Error()
              }), HeroInfo) : HeroInfo)();
              info.createDefaultData(reward.itemId);
              node = this.createHeroItem(info, parentNode);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Book:
              node = this.createBookItem(reward.itemId, parentNode);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Currency:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Material:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_HeroCommonCost:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_LimitTimeItem:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Elixir:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Box:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_ChoiceBox:
              if (itemTab.Id > 6100 && itemTab.Id < 9000) {
                reward.itemId = itemTab.Id - 4000;
                let info = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
                  error: Error()
                }), HeroInfo) : HeroInfo)();
                info.createDefaultData(reward.itemId);
                node = this.createHeroItem(info, parentNode);
              } else {
                let itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                  error: Error()
                }), ItemInfo) : ItemInfo)();
                itemInfo.initItemData(reward.itemId, Number(reward.num));
                node = this.createItem(itemInfo, parentNode, isTouch);
              }

              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Equip:
              let euqipInfo = new (_crd && EquipInfo === void 0 ? (_reportPossibleCrUseOfEquipInfo({
                error: Error()
              }), EquipInfo) : EquipInfo)();
              euqipInfo.createDefaultData(reward.itemId);
              node = this.createEquipItem(euqipInfo, parentNode, isTouch); // this.createEquipItem(data, parentNode)

              break;

            default:
              let itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              itemInfo.initItemData(reward.itemId, Number(reward.num));
              node = this.createItem(itemInfo, parentNode, isTouch);
              break;
          }

          return node;
        }

        createItem(data, parentNode, isTouch = true, isConsume = false) {
          let node = null;
          node = this._itemCommonPool.get();

          if (!node) {
            node = instantiate(this.conmmonPrefab);
          }

          node.parent = parentNode;
          let com = node.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
            error: Error()
          }), CommonItem) : CommonItem);
          com.initData(data, isTouch, isConsume);
          node.setPosition(v3(0, 0));
          node.setScale(1, 1);
          return node;
        }

        createEquipItem(data, parentNode, isTouch = true) {
          let node = null;
          node = this._equipmentItemPool.get();

          if (!node) {
            node = instantiate(this.equipmentPrefab);
          }

          node.parent = parentNode;
          let com = node.getComponent(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
            error: Error()
          }), EquipmentItem) : EquipmentItem);
          com.initData(data, isTouch);
          node.setPosition(v3(0, 0));
          return node;
        }

        createHeroItem(data, parent) {
          let node = null;
          node = this._itemHeroPool.get();

          if (!node) {
            node = instantiate(this.heroPrefab);
          }

          node.parent = parent;
          node.setPosition(0, 0);
          node.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem).UpdateContent(data);
          node.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem).setLevel(0);
          return node;
        }

        createBookItem(data, parent) {
          let node = null;
          node = this._bookItemPool.get();

          if (!node) {
            node = instantiate(this.bookPrefab);
          }

          node.parent = parent;
          node.setPosition(0, 0);
          const itemTs = node.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
            error: Error()
          }), WeaponItem) : WeaponItem);
          itemTs.initData(data, false, false);
          return node;
        }

        putCommonItem(node) {
          this._itemCommonPool.put(node);
        }

        putEquipItem(node) {
          this._equipmentItemPool.put(node);
        }

        putHeroItem(node) {
          this._itemHeroPool.put(node);
        }

        putBookItme(node) {
          this._bookItemPool.put(node);
        }

        clear() {
          this._itemCommonPool.clear();

          this._itemHeroPool.clear();

          this._equipmentItemPool.clear();

          this._bookItemPool.clear();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88d01461130c563de56f2fddc8c4ff10aa32e868.js.map