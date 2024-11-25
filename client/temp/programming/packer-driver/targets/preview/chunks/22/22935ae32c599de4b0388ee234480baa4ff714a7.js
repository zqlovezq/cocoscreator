System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "client_protocol", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, log, Node, ViewPop, CommonItem, tab, ItemInfo, LangMgr, HeroDataControl, ItemPoolMgr, HeroInfo, ShowTips, UIMgr, ItemData, proto, Net, EventMgr, ViewName, HeroItem, GameUtil, EquipData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, ItemInfoPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
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

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../equip/EquipData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      log = _cc.log;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      CommonItem = _unresolved_3.CommonItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      HeroDataControl = _unresolved_7.HeroDataControl;
    }, function (_unresolved_8) {
      ItemPoolMgr = _unresolved_8.ItemPoolMgr;
    }, function (_unresolved_9) {
      HeroInfo = _unresolved_9.HeroInfo;
    }, function (_unresolved_10) {
      ShowTips = _unresolved_10.ShowTips;
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      ItemData = _unresolved_11.ItemData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_12) {
      Net = _unresolved_12.Net;
    }, function (_unresolved_13) {
      EventMgr = _unresolved_13.EventMgr;
    }, function (_unresolved_14) {
      ViewName = _unresolved_14.ViewName;
    }, function (_unresolved_15) {
      HeroItem = _unresolved_15.HeroItem;
    }, function (_unresolved_16) {
      GameUtil = _unresolved_16.GameUtil;
    }, function (_unresolved_17) {
      EquipData = _unresolved_17.EquipData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aeba1aXvNdGf6fQDk9mhg8i", "ItemInfoPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Label', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemInfoPop", ItemInfoPop = (_dec = ccclass('ItemInfoPop'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Label), _dec(_class = (_class2 = class ItemInfoPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_top", _descriptor, this);

          _initializerDefineProperty(this, "node_list", _descriptor2, this);

          _initializerDefineProperty(this, "node_num", _descriptor3, this);

          _initializerDefineProperty(this, "node_btn", _descriptor4, this);

          _initializerDefineProperty(this, "item", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_desc", _descriptor7, this);

          _initializerDefineProperty(this, "node_list_content", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_num", _descriptor9, this);

          _initializerDefineProperty(this, "node_use_btn", _descriptor10, this);

          _initializerDefineProperty(this, "node_compound_btn", _descriptor11, this);

          _initializerDefineProperty(this, "node_hava_item_count", _descriptor12, this);

          _initializerDefineProperty(this, "node_way", _descriptor13, this);

          _initializerDefineProperty(this, "lbl_way", _descriptor14, this);

          this._itemId = 0;
          this._itemUseCount = 0;
          this._isBag = false;
          this._itemCount = 0;
          this._selectHeroId = 0;
          this.equipComItems = [];
          this.heroComItems = [];
          this.comItems = [];
          this.bookComItems = [];
        }

        // 判断当前是否是背包界面
        judgeIsBagView() {
          var BagPop = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView('BagPop');

          if (BagPop) {
            return true;
          }

          return false;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UseItemRsp, this.on_s2c_UseItemRsp, this);
        }

        on_s2c_UseItemRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (msg.rewards && msg.rewards.length > 0) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).CongratulationPop,
                data: msg.rewards
              });
            } else {
              log("奖励是空的"); //ShowTips("背包已满,去邮箱领取英雄");
              // ShowTips(LangMgr.getLab("Tips_herobag_2"));
            }
          } else if (msg.error) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)(msg.error.message);
          }

          this.onClose();
        }

        onShow() {
          this._isBag = this.judgeIsBagView();
          this._itemId = this.openData.itemId;
          this.node_top.active = true;
          this.node_list.active = false;
          this.node_num.active = false;
          this.node_btn.active = false;
          var itemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this._itemId);

          if (itemData.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Piece) {
            this._itemUseCount = itemData.Quality === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemQuality.ItemQuality_Purple ? 30 : 50;
          } else if (itemData.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_ChoiceBox) {
            this._itemUseCount = 1;
          }

          var count = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this._itemId);

          if (count >= this._itemUseCount) {
            this._itemCount = 1;
          }

          this.updatePieceLbl();

          switch (itemData.Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Elixir:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Head:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_HeadFrame:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_ChatBubble:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_MainScene:
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Piece:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Material:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_ChoiceBox:
              this.showMaterialTip();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Box:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_IdleReward:
              this._itemUseCount = 1;
              this.node_compound_btn.active = false;
              this.node_use_btn.active = true;
              this.node_num.active = true;
              this.node_btn.active = true;
              break;

            default:
              break;
          }

          var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemInfo.itemId = this._itemId;
          itemInfo.num = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this._itemId);
          this.item.initData(itemInfo);
          this.item.setSelectState(false);
          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemData.Name);
          this.lbl_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemData.Desc);
          /* 是否在玩家背包内 如果不是不显示 num_node  btn_node*/

          if (!this._isBag) {
            this.node_num.active = false;
            this.node_btn.active = false;
            this.node_hava_item_count.active = false;
          }
          /* 是否存在跳转路径 */


          var jumpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemClientJumpTableByItemId.getValue(this._itemId);
          this.node_way.active = jumpTab ? true : false;

          if (itemData.AcquireWay.length > 0) {
            var arr = [];

            for (var i = 0; i < itemData.AcquireWay.length; i++) {
              var opName = itemData.AcquireWay[i];
              var str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName[opName]);
              arr.push(str);
            }

            this.lbl_way.string = arr.join(", ");
            this.node_way.active = true;
          }
        }
        /* 材料点击 */


        showMaterialTip() {
          var itemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this._itemId);
          this.node_use_btn.active = itemData.BagType !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Fragment;
          this.node_compound_btn.active = itemData.BagType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Fragment;

          if (itemData.BagType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Fragment) {
            // 碎片
            if (this._itemId >= 6001 && this._itemId <= 6003) {
              // 随机英雄品质碎片
              this.createRdmPiece(itemData.DropId[1] ? itemData.DropId[1] : itemData.DropId[0]);
            } else if (this._itemId >= 6004 && this._itemId <= 6008) {
              // 随机英雄职业碎片
              this.createRdmPiece(itemData.DropId[1] ? itemData.DropId[1] : itemData.DropId[0]);
            } else {
              if ((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().HeroTableById.getValue(this._itemId - 4000)) {
                // 单英雄碎片
                this.node_num.active = true;
                this.node_btn.active = true;
              }
            }
          } else if (itemData.BagType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BagType.BagType_Goods) {
            var boxTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ChoiceBoxTableByChoiceBoxId.getValue(itemData.DropId[0]);

            if (boxTab) {
              this.createRdmPiece(0, true);
            } // else {
            //     if (itemData.Type === tab.ItemType.ItemType_Box) {
            //         this.createRdmPiece(itemData.DropId[0], false)
            //     }
            // }

          }
        }
        /* 随机碎片、随机宝箱：显示top_node list_node num_node btn_node，滑动列表道具不可选中 */


        createRdmPiece(isAutoBoxDropId, isSelfSelectBox) {
          var _this = this;

          var self = this;
          this.node_list.active = true;
          this.node_btn.active = true;
          this.node_num.active = true;
          this.node_list_content.destroyAllChildren();
          var itemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this._itemId); // const heroId = this._itemId;

          if (this.heroComItems) {
            for (var key in this.heroComItems) {
              (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.putHeroItem(this.heroComItems[key]);
            }
          }

          var heroList = [];
          var boxList = []; // if (isVocation) {
          //     heroList = HeroDataControl.ins.getBookHeroListByVocation(6009 - heroId, false);
          // } else {
          //     heroList = HeroDataControl.ins.getHeroListByAptitude(heroId - 5999)
          // }
          // 如果是自选宝箱 数据为自选宝箱表

          if (isSelfSelectBox) {
            var boxTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ChoiceBoxTableByChoiceBoxId.getValue(itemData.DropId[0]);
            heroList = boxTab.ChoiceItemIds;
            boxList = boxTab.ChoiceItemNum;
          }

          if (isAutoBoxDropId) {
            heroList = []; // 如果是随机宝箱

            var list = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).getRewardsByDropId(isAutoBoxDropId);

            for (var i = 0; i < list.length; i++) {
              heroList.push(list[i].itemId);
            }
          }

          var _loop = function _loop(_i) {
            var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTableById.getValue(heroList[_i]);
            var itemTs = null;

            if (itemTab) {
              var info = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
                error: Error()
              }), HeroInfo) : HeroInfo)();
              info.itemId = heroList[_i];
              info.id = 0;
              info.star = itemTab.DefaultStar;
              var itemNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(info, _this.node_list_content);
              itemTs = itemNode.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
                error: Error()
              }), HeroItem) : HeroItem);
              itemTs.setLevel(0);
            } else {
              var _info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();

              _info.itemId = heroList[_i];
              _info.num = 1;

              var _itemNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                error: Error()
              }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(_info, _this.node_list_content);

              itemTs = _itemNode.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                error: Error()
              }), CommonItem) : CommonItem);
            }

            if (_this._isBag && itemData.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_ChoiceBox) {
              itemTs.setTouchCallBack(() => {
                self._selectHeroId = heroList[_i];

                if (boxList.length > 0) {
                  self._itemUseCount = boxList[_i];
                }

                _this.setAllHerosSelect();
              });
            }
          };

          for (var _i = 0; _i < heroList.length; _i++) {
            _loop(_i);
          }
        }

        setAllHerosSelect() {
          for (var i = 0; i < this.node_list_content.children.length; i++) {
            var item = this.node_list_content.children[i];
            var ts = null;

            if (item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
              error: Error()
            }), HeroItem) : HeroItem)) {
              ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
                error: Error()
              }), HeroItem) : HeroItem);
              ts.setSelect(this._selectHeroId === ts.heroInfo.itemId ? true : false);
            } else if (item.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
              error: Error()
            }), CommonItem) : CommonItem)) {
              ts = item.getComponent(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
                error: Error()
              }), CommonItem) : CommonItem);
              ts.setSelectState(this._selectHeroId === ts.data.itemId ? true : false);
            }
          }
        }

        onDestroy() {
          super.onDestroy();
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
        } // add碎片


        clickAddPiece() {
          this._itemCount++;
          var count = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this._itemId);
          var max = Math.floor(count / this._itemUseCount);

          if (this._itemCount > max) {
            this._itemCount = max;
          }

          this.updatePieceLbl();
        } // sub碎片


        clickSubPiece() {
          this._itemCount--;
          var count = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this._itemId);
          var max = Math.floor(count / this._itemUseCount);

          if (max >= 1 && this._itemCount < 1) {
            this._itemCount = 1;
          }

          if (this._itemCount < 0) {
            this._itemCount = 0;
          }

          this.updatePieceLbl();
        } // max碎片


        clickMaxPiece() {
          var count = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(this._itemId);
          var max = Math.floor(count / this._itemUseCount);
          this._itemCount = max;
          this.updatePieceLbl();
        }

        useBtn() {
          console.log("cocos 点击使用道具");
          var itemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this._itemId);
          var choiceIndex = -1;

          if (itemData.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_ChoiceBox) {
            var boxTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ChoiceBoxTableByChoiceBoxId.getValue(itemData.DropId[0]);
            var heroList = boxTab.ChoiceItemIds;
            choiceIndex = heroList.indexOf(this._selectHeroId);

            if (choiceIndex < 0) {
              //ShowTips("请选择物品");
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("Tips_iteminfo_1"));
              return;
            }
          } else {
            if (itemData.DropId && (itemData.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Gift || itemData.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Box)) {
              var heroCount = 0;
              var totalEquip = 0;
              var totalhero = 0;
              var equipCount = 0;

              for (var key in itemData.DropId) {
                var items = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).getRewardsByDropId(itemData.DropId[key]);

                for (var k in items) {
                  if (items[k].itemTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).ItemType.ItemType_Hero) {
                    if (heroCount < items[k].num) {
                      heroCount = items[k].num;
                    }
                  } else if (items[k].itemTable.BagType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).BagType.BagType_Equip) {
                    if (equipCount < items[k].num) {
                      equipCount = items[k].num;
                    }
                  }
                }

                totalEquip += equipCount;
                totalhero += heroCount;
                log("使用宝箱最大数量 ---装备--" + totalEquip + "-----英雄-----" + totalhero, '---掉落id---', itemData.DropId[key]);
              }

              if (totalhero > 0) {
                if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.getHeroBagFull(totalhero * this._itemCount)) {
                  (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                    error: Error()
                  }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                    error: Error()
                  }), LangMgr) : LangMgr).getLab("Tips_herobag_1"));
                  return;
                }
              }

              if (totalEquip > 0) {
                if ((_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
                  error: Error()
                }), EquipData) : EquipData).ins.getEquipBagFull(totalEquip * this._itemCount)) {
                  (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                    error: Error()
                  }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                    error: Error()
                  }), LangMgr) : LangMgr).getLab("Tips_bag_1"));
                  return;
                }
              }
            }
          }

          if (this._itemCount > 0) {
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_UseItemReq();
            msg.itemId = this._itemId;
            msg.itemCount = this._itemUseCount * this._itemCount;

            if (choiceIndex >= 0) {
              msg.extra = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).UseItemExtra();
              msg.extra.choiceIndexes = [];

              for (var i = 0; i < this._itemCount; i++) {
                msg.extra.choiceIndexes.push(choiceIndex);
              }
            }

            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.UseItemReq, msg);
          }
        }

        compoundBtn() {
          console.log("cocos 点击合成碎片");

          if ((_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getHeroBagFull(this._itemCount)) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_herobag_1"));
            return;
          }

          if (this._itemCount > 0) {
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_UseItemReq();
            msg.itemId = this._itemId;
            msg.itemCount = this._itemUseCount * this._itemCount;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.UseItemReq, msg);
          }
        } // use碎片


        updatePieceLbl() {
          this.lbl_num.string = String(this._itemCount);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_top", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_list", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_num", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_desc", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_list_content", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_num", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_use_btn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_compound_btn", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_hava_item_count", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_way", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lbl_way", [_dec15], {
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
//# sourceMappingURL=22935ae32c599de4b0388ee234480baa4ff714a7.js.map