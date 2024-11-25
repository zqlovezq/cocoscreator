System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, proto, tab, EventMgr, ItemData, HeroData, EquipData, RareBookData, HeroRed, RedMgr, RedDotType, RoleData, ItemControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "./ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookData(extras) {
    _reporterNs.report("RareBookData", "../rareBook/RareBookData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRed(extras) {
    _reporterNs.report("HeroRed", "../hero/herobag/HeroRed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  _export("ItemControl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      ItemData = _unresolved_5.ItemData;
    }, function (_unresolved_6) {
      HeroData = _unresolved_6.HeroData;
    }, function (_unresolved_7) {
      EquipData = _unresolved_7.EquipData;
    }, function (_unresolved_8) {
      RareBookData = _unresolved_8.RareBookData;
    }, function (_unresolved_9) {
      HeroRed = _unresolved_9.HeroRed;
    }, function (_unresolved_10) {
      RedMgr = _unresolved_10.RedMgr;
    }, function (_unresolved_11) {
      RedDotType = _unresolved_11.RedDotType;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a70b16BCk1Fao4jC/Juz2/e", "ItemControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 道具 */

      _export("ItemControl", ItemControl = class ItemControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new ItemControl();
          }

          return this._instance;
        }

        register() {
          // EventMgr.onMsg(proto.Ptl.GetItemsByTypeRsp, this.on_s2c_GetItemsByTypeRsp, this)
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ItemChangePush, this.on_s2c_Msg_ItemChangePush, this); // this.addTestData();

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Bag_Compose, this.on_Red_BagCompose, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroBagRed, this.red_hero_Bag, this);
        }

        requestItems() {// let msg = new proto.Msg_GetItemsByTypeReq()
          // msg.types = [
          //     tab.ItemType.ItemType_Currency,
          //     tab.ItemType.ItemType_IdleReward,
          //     tab.ItemType.ItemType_Piece,
          //     tab.ItemType.ItemType_Material,
          //     tab.ItemType.ItemType_Gift
          // ]
          // Net.Send(proto.Ptl.GetItemsByTypeReq, msg)
        } // on_s2c_GetItemsByTypeRsp(msg: proto.Msg_GetItemsByTypeRsp) {
        //     ItemData.ins.purge()
        //     ItemData.ins.adds(msg.items as proto.Item[])
        //     /* 增加一些简单道具 */
        //     let items = RoleData.ins.simpleItems;
        //     ItemData.ins.adds(items as proto.Item[]);
        // }


        on_s2c_Msg_ItemChangePush(msg) {
          //道具变更
          (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.adds(msg.updatedItems); //英雄变更

          (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.adds(msg.updatedHeroes); //装备变更

          (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.adds(msg.updatedEquipments);
          (_crd && RareBookData === void 0 ? (_reportPossibleCrUseOfRareBookData({
            error: Error()
          }), RareBookData) : RareBookData).ins.addBooks(msg.updatedBooks); // 材料变化刷新红点数据

          (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.refreshHeroRedData(); //英雄、装备 删除  （道具数量为0不删除）

          for (let index = 0; index < msg.removedItems.length; index++) {
            const v = msg.removedItems[index];
            let itemType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(v.itemId).Type;

            switch (itemType) {
              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Hero:
                //英雄删除
                (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                  error: Error()
                }), HeroData) : HeroData).ins.remove(v.id);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Equip:
                //装备删除
                (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
                  error: Error()
                }), EquipData) : EquipData).ins.remove(v.id);
                break;
            }
          }
          /* 道具更新头像等道具 */


          if (msg.updatedSingleItems.length > 0) {
            for (let i = 0; i < msg.updatedSingleItems.length; i++) {
              const itemId = msg.updatedSingleItems[i].itemId;
              const itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ItemTableById.getValue(itemId);

              if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Head) {
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.avatarInfo.headIcons.push(msg.updatedSingleItems[i]);
                const clientData = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData["newHeadIcon"];

                if (clientData) {
                  if (clientData.indexOf("" + itemId) === -1) {
                    (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                      error: Error()
                    }), RoleData) : RoleData).ins.setClientData("newHeadIcon", clientData + "," + itemId);
                  }
                } else {
                  (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                    error: Error()
                  }), RoleData) : RoleData).ins.setClientData("newHeadIcon", "," + itemId);
                }
              } else if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_HeadFrame) {
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.avatarInfo.headFrames.push(msg.updatedSingleItems[i]);
                const clientData = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData["newHeadFrame"];

                if (clientData) {
                  if (clientData.indexOf("" + itemId) === -1) {
                    (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                      error: Error()
                    }), RoleData) : RoleData).ins.setClientData("newHeadFrame", clientData + "," + itemId);
                  }
                } else {
                  (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                    error: Error()
                  }), RoleData) : RoleData).ins.setClientData("newHeadFrame", "," + itemId);
                }
              } else if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_ChatBubble) {
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.avatarInfo.chatBubbles.push(msg.updatedSingleItems[i]);
              } else if (itemTab.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_MainScene) {
                (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.avatarInfo.mainScenes.push(msg.updatedSingleItems[i]);
              }
            }

            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Head_Icon_Red);
          }
        }

        addTestData() {
          let tests = [];
          let item = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          item.itemId = 20001;
          item.num = 20;
          tests.push(item);
          let item2 = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          item2.itemId = 20002;
          item2.num = 20;
          tests.push(item2);
          let item3 = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          item3.itemId = 20003;
          item3.num = 5;
          tests.push(item3);
          let item4 = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          item4.itemId = 20004;
          item4.num = 1;
          tests.push(item4);
          let item5 = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          item5.itemId = 20009;
          item5.num = 1;
          tests.push(item5);
          let item6 = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          item6.itemId = 20008;
          item6.num = 1;
          tests.push(item6);
          let item7 = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          item7.itemId = 20010;
          item7.num = 1;
          tests.push(item7);
          (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.adds(tests); // let item8=new proto.Item();
          // item8.itemId=20012;
          // item8.num=1;
          // item8.type=7;
          // tests.push(item8)
        }

        on_Red_BagCompose() {
          let itemList = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getItems();

          for (let value of itemList) {
            let bagType = value.itemTable.BagType;

            if (bagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Fragment) {
              let needNum = value.itemTable.DropId[0];

              if (Number(value.num) >= needNum) {
                return true;
              }
            }
          }

          return false;
        }

        red_hero_Bag() {
          // 只有碎片跟道具有红点 --- 道具红点->有随机宝箱 碎片红点->可以一件合成
          let stateToChange = {};
          let itemList = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getItems();

          for (let value of itemList) {
            let bagType = value.itemTable.BagType;
            let itemType = value.itemTable.Type;

            if (bagType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).BagType.BagType_Goods && value.num > 0) {
              if (itemType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).ItemType.ItemType_Box) {
                stateToChange[value.itemId] = true;
              }
            }
          }

          return stateToChange;
        }

      });

      ItemControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5caf9dc368ee05091aa37064a29e0d10f37faeb.js.map