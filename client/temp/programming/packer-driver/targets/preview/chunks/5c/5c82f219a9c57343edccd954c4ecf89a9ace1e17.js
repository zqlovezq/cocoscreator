System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, ItemInfo, ItemPoolMgr, HeroInfo, tab, HeroItem, WeaponItem, EquipInfo, EquipmentItem, CommonItem, RareBookInfo, _dec, _class, _crd, ccclass, property, CongratulationItem;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../common/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipmentItem(extras) {
    _reporterNs.report("EquipmentItem", "../item/EquipmentItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "../rareBook/RareBookInfo", _context.meta, extras);
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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ItemInfo = _unresolved_2.ItemInfo;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      HeroInfo = _unresolved_4.HeroInfo;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      HeroItem = _unresolved_6.HeroItem;
    }, function (_unresolved_7) {
      WeaponItem = _unresolved_7.WeaponItem;
    }, function (_unresolved_8) {
      EquipInfo = _unresolved_8.EquipInfo;
    }, function (_unresolved_9) {
      EquipmentItem = _unresolved_9.EquipmentItem;
    }, function (_unresolved_10) {
      CommonItem = _unresolved_10.CommonItem;
    }, function (_unresolved_11) {
      RareBookInfo = _unresolved_11.RareBookInfo;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1f196u9qxN0IWMd5kk0eyX", "CongratulationItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layout', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CongratulationItem", CongratulationItem = (_dec = ccclass('CongratulationItem'), _dec(_class = class CongratulationItem extends Component {
        constructor() {
          super(...arguments);
          this.data = [];
          this.count = 0;
          this.equipComItems = [];
          this.heroComItems = [];
          this.comItems = [];
          this.bookComItems = [];
        }

        setData(data) {
          this.data = data;
          this.count = 0;

          for (var i = 0; i < 6; i++) {
            var parentNode = this.node.children[i];

            if (data[i]) {
              parentNode.active = true;
            } else {
              parentNode.active = false;
            }
          }

          this.unschedule(this.playAnim);
          this.schedule(this.playAnim, 0.25, data.length - 1);
        }

        playAnim() {
          var parentNode = this.node.children[this.count];
          var anim = parentNode.getComponent(Animation);
          anim.play();
          this.createItemByType(this.data[this.count], parentNode);
          this.count++;
        } // 根据类型创建不同的item


        createItemByType(data, parentNode) {
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(data.itemId);
          var Type = itemTab.Type;

          switch (Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Hero:
              this.createHeroItem(data, parentNode);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Book:
              this.createBookItem(data, parentNode);
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
            }), tab) : tab).ItemType.ItemType_Piece:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_IdleReward:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_ChoiceBox:
              if (itemTab.Id > 6100 && itemTab.Id < 9000) {
                data.itemId = itemTab.Id - 4000;
                this.createHeroItem(data, parentNode, true);
              } else {
                this.createCommonItem(data, parentNode);
              }

              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_HeadFrame:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_ChatBubble:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Head:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_MainScene:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_LimitTimeItem:
              this.createCommonItem(data, parentNode);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Equip:
              this.createEquipItem(data, parentNode);
              break;

            default:
              break;
          }
        } // 创建普通item


        createCommonItem(data, parentNode) {
          var info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          info.itemId = data.itemId;
          info.num = data.num;
          var itemItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(info, parentNode);
          this.comItems.push(itemItem);
          var itemTs = itemItem.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
            error: Error()
          }), CommonItem) : CommonItem);
          itemTs.setTouchCallBack(() => {});
        } // 创建英雄item


        createHeroItem(data, parentNode, isPiece) {
          if (isPiece === void 0) {
            isPiece = false;
          }

          var info = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          info.itemId = data.itemId;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(data.itemId);
          info.id = 0;
          info.star = data.extra && data.extra.heroStar ? data.extra.heroStar : itemTab.DefaultStar;
          var heroItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(info, parentNode);
          this.heroComItems.push(heroItem);
          var itemTs = heroItem.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem);
          itemTs.setTouchCallBack(() => {});

          if (isPiece) {
            itemTs.setPiece(Number(data.num));
          }
        } // 创建秘籍


        createBookItem(data, parentNode) {
          var info = new (_crd && RareBookInfo === void 0 ? (_reportPossibleCrUseOfRareBookInfo({
            error: Error()
          }), RareBookInfo) : RareBookInfo)();
          info.initItemId(data.itemId);
          var Weapon_Item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createBookItem(info, parentNode);
          this.bookComItems.push(Weapon_Item);
          var itemTs = Weapon_Item.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
            error: Error()
          }), WeaponItem) : WeaponItem);
          itemTs.initBookItemId(data.itemId);
        } // 创建装备


        createEquipItem(data, parentNode) {
          var info = new (_crd && EquipInfo === void 0 ? (_reportPossibleCrUseOfEquipInfo({
            error: Error()
          }), EquipInfo) : EquipInfo)();
          info.itemId = data.itemId;
          var equipItem = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createEquipItem(info, parentNode, false);
          this.equipComItems.push(equipItem);
          var itemTs = equipItem.getComponent(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
            error: Error()
          }), EquipmentItem) : EquipmentItem);
          itemTs.setTouchCallBack(() => {});
        }

        onDisable() {
          if (this.equipComItems) {
            for (var key in this.equipComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putEquipItem(this.equipComItems[key]);
            }
          }

          if (this.heroComItems) {
            for (var _key in this.heroComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putHeroItem(this.heroComItems[_key]);
            }
          }

          if (this.comItems) {
            for (var _key2 in this.comItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putCommonItem(this.comItems[_key2]);
            }
          }

          if (this.bookComItems) {
            for (var _key3 in this.bookComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putBookItme(this.bookComItems[_key3]);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c82f219a9c57343edccd954c4ecf89a9ace1e17.js.map