System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, tab, HeroItem, CommonItem, ItemInfo, proto, HeroInfo, WeaponItem, EquipInfo, EquipmentItem, dailyBuyShop, GameUtil, Net, MallDataMgr, LangMgr, MALLNAME, AdMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, MallCommodityItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../hero/HeroInfo", _context.meta, extras);
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

  function _reportPossibleCrUseOfdailyBuyShop(extras) {
    _reporterNs.report("dailyBuyShop", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "./MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../AdMgr", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      HeroItem = _unresolved_3.HeroItem;
    }, function (_unresolved_4) {
      CommonItem = _unresolved_4.CommonItem;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      HeroInfo = _unresolved_6.HeroInfo;
    }, function (_unresolved_7) {
      WeaponItem = _unresolved_7.WeaponItem;
    }, function (_unresolved_8) {
      EquipInfo = _unresolved_8.EquipInfo;
    }, function (_unresolved_9) {
      EquipmentItem = _unresolved_9.EquipmentItem;
    }, function (_unresolved_10) {
      dailyBuyShop = _unresolved_10.dailyBuyShop;
      GameUtil = _unresolved_10.GameUtil;
    }, function (_unresolved_11) {
      Net = _unresolved_11.Net;
    }, function (_unresolved_12) {
      MallDataMgr = _unresolved_12.MallDataMgr;
    }, function (_unresolved_13) {
      LangMgr = _unresolved_13.LangMgr;
    }, function (_unresolved_14) {
      MALLNAME = _unresolved_14.MALLNAME;
    }, function (_unresolved_15) {
      AdMgr = _unresolved_15.AdMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d84dUkNl1BQolyCknnPvRJ", "MallCommodityItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MallCommodityItem", MallCommodityItem = (_dec = ccclass('MallCommodityItem'), _dec2 = property(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
        error: Error()
      }), HeroItem) : HeroItem), _dec3 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec4 = property(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
        error: Error()
      }), WeaponItem) : WeaponItem), _dec5 = property(_crd && EquipmentItem === void 0 ? (_reportPossibleCrUseOfEquipmentItem({
        error: Error()
      }), EquipmentItem) : EquipmentItem), _dec6 = property(Label), _dec7 = property(Sprite), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Sprite), _dec14 = property(Node), _dec(_class = (_class2 = class MallCommodityItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hero_item", _descriptor, this);

          _initializerDefineProperty(this, "common_item", _descriptor2, this);

          _initializerDefineProperty(this, "weapon_item", _descriptor3, this);

          _initializerDefineProperty(this, "equip_item", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_quota", _descriptor5, this);

          _initializerDefineProperty(this, "sp_need_item", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_need_item", _descriptor7, this);

          _initializerDefineProperty(this, "node_buy", _descriptor8, this);

          _initializerDefineProperty(this, "node_ordinary", _descriptor9, this);

          _initializerDefineProperty(this, "node_ad", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_item_name", _descriptor11, this);

          _initializerDefineProperty(this, "sp_off", _descriptor12, this);

          _initializerDefineProperty(this, "node_lock", _descriptor13, this);

          this.mallItemTab = null;
          this._view_type = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_None;
          this._view_name = (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NONE;
          this._dailyShopIndex = 0;
          this._dailyShopId = 0;
          this._dailyShopData = null;
          this._CostItemId = 0;
          this._CostItemNum = 0;
          this._GetItemId = 0;
          this._GetItemNum = 0;
          this.boughtCount = 0;
        }

        initData(viewData, view, viewName) {
          //   根据商品id设置item
          this._view_name = viewName;
          this.mallItemTab = viewData;
          this._view_type = view;
          this.createItemByType();
          this.setStaticView();
          this.node.on(Node.EventType.TOUCH_END, this.buyItem, this);
        }

        buyItem() {
          // 购买道具
          if (this.mallItemTab.isBought) {
            return;
          }

          if (this.mallItemTab.commodityId && this.mallItemTab.commodityId === 1000) {
            // 广告看
            (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_BuyDailyShop, () => {
              var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Msg_BuyDailyShopCommodityReq();
              msg.index = this._dailyShopIndex;
              (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                error: Error()
              }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                error: Error()
              }), proto) : proto).Ptl.BuyDailyShopCommodityReq, msg);
            }, false);
          } else {
            (_crd && dailyBuyShop === void 0 ? (_reportPossibleCrUseOfdailyBuyShop({
              error: Error()
            }), dailyBuyShop) : dailyBuyShop)(this._CostItemId, this._CostItemNum, this._GetItemId, "Tips_common_buy", () => {
              // 发送购买信息
              if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).MallTab.MallTab_Tab1) {
                // 如果是每日商店
                var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_BuyDailyShopCommodityReq();
                msg.index = this._dailyShopIndex;
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.BuyDailyShopCommodityReq, msg);
              } else {
                // 发送购买固定商品
                if (this.boughtCount >= this.mallItemTab.LimitCount) {
                  console.log("没有次数了");
                } else {
                  var _msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                    error: Error()
                  }), proto) : proto).Msg_BuyFixedShopCommodityReq();

                  _msg.commodityId = this.mallItemTab.Id;
                  _msg.num = 1;
                  (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                    error: Error()
                  }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                    error: Error()
                  }), proto) : proto).Ptl.BuyFixedShopCommodityReq, _msg);
                }
              }
            });
          }
        } // 根据类型创建不同的item


        createItemByType() {
          this.hero_item.node.parent.active = false;
          this.common_item.node.parent.active = false;
          this.equip_item.node.parent.active = false;
          this.node_buy.active = false;
          this.node_ad.active = false;
          this.node_ordinary.active = true;
          this.sp_off.node.parent.active = false;
          this.node_lock.active = false; // 判断当前是商品还是道具

          var data = null;

          if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab2 || this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab3 || this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab4) {
            this.boughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
              error: Error()
            }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(this._view_name).get(this.mallItemTab.Id);
            this._GetItemId = this.mallItemTab.GetItemIds[0];
            this._GetItemNum = this.mallItemTab.GetItemNum[0];
            this._CostItemId = this.mallItemTab.CostItemIds[0];
            this._CostItemNum = this.mallItemTab.CostItemNum[0];
            this.node_buy.active = this.mallItemTab.LimitCount == this.boughtCount;
            this.node_ordinary.active = !this.node_buy.active;
            this.setAsyncView();
          } else if (this._view_type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallTab.MallTab_Tab1) {
            this._dailyShopIndex = this.mallItemTab.index;
            this._dailyShopId = this.mallItemTab.commodityId;
            this._dailyShopData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().DailyShopItemTableById.getValue(this._dailyShopId);
            this._CostItemId = this._dailyShopData.CostItemId;
            this._CostItemNum = this._dailyShopData.CostItemNum;
            this._GetItemId = this._dailyShopData.GetItemId;
            this._GetItemNum = this._dailyShopData.GetItemNum;
            this.lbl_quota.node.active = false;
            this.node_buy.active = this.mallItemTab.isBought;
            this.node_ordinary.active = !this.mallItemTab.isBought;
            this.node.getChildByName("ordinary_node").active = !(this._dailyShopData.Advert == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_BuyDailyShop);

            if (this._dailyShopData.Advert == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_BuyDailyShop && !this.mallItemTab.isBought) {
              // 每日商店广告
              this.node_ad.active = true;
              this.node_ordinary.active = false;
            } // 是否有折扣图标 有的话显示折扣信息


            if (this._dailyShopData.DiscountIcon) {
              this.sp_off.node.parent.active = true;
              this.sp_off.setTexture(this._dailyShopData.DiscountIcon);
            }
          }

          data = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Item();
          data.itemId = this._GetItemId;
          data.num = this._GetItemNum;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(data.itemId);
          this.lbl_item_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemTab.Name);
          var Type = itemTab.Type;

          switch (Type) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Hero:
              this.createHeroItem(data);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Book:
              this.createBookItem(data);
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
                this.createHeroItem(data, true);
              } else {
                this.createCommonItem(data);
              }

              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Equip:
              this.createEquipItem(data);
              break;

            default:
              break;
          }
        } // 创建普通item


        createCommonItem(data) {
          this.common_item.node.parent.active = true;
          var info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          info.itemId = data.itemId;
          info.num = data.num;
          this.common_item.initData(info);
        } // 创建英雄item


        createHeroItem(data, isPiece) {
          if (isPiece === void 0) {
            isPiece = false;
          }

          this.hero_item.node.parent.active = true;
          var info = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          info.itemId = data.itemId;
          var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(data.itemId);
          info.id = 0;
          info.star = itemTab.DefaultStar;
          this.hero_item.UpdateContent(info);
          this.hero_item.numLab.node.active = false;

          if (isPiece) {
            this.hero_item.setPiece(Number(data.num));
          }
        } // 创建秘籍


        createBookItem(data) {
          this.weapon_item.initBookItemId(data.itemId);
        } // 创建装备


        createEquipItem(data) {
          this.equip_item.node.parent.active = true;
          ;
          var info = new (_crd && EquipInfo === void 0 ? (_reportPossibleCrUseOfEquipInfo({
            error: Error()
          }), EquipInfo) : EquipInfo)();
          info.itemId = data.itemId;
          this.equip_item.initData(info); // this.equip_item.setTouchCallBack(() => {
          // })
        } // 设置不会变化的节点


        setStaticView() {
          if (this._CostItemId) {
            var itemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this._CostItemId);
            this.sp_need_item.setTexture(itemTab.Icon);
            this.lbl_need_item.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(this._CostItemNum, true);
          }
        } // 设置可以变化的节点


        setAsyncView() {
          // 限购次数
          this.lbl_quota.node.active = true;
          var RefreshType = this.mallItemTab.RefreshType;
          var str = "";

          if (RefreshType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).RefreshType.RefreshType_Daily) {
            //str = "每日"
            str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_mall_9");
          } else if (RefreshType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).RefreshType.RefreshType_Weekly) {
            //str = "每周"
            str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_mall_10");
          } else if (RefreshType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).RefreshType.RefreshType_Monthly) {
            //str = "每月"
            str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_mall_11");
          } //this.lbl_quota.string = str + "限購：" + (this.mallItemTab.LimitCount - this.boughtCount) + "/" + this.mallItemTab.LimitCount;


          this.lbl_quota.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_commondesc_108", [str]) + (this.mallItemTab.LimitCount - this.boughtCount) + "/" + this.mallItemTab.LimitCount;
        } // 点击看广告


        onClickAd() {
          console.log("cocos \u70B9\u51FB\u89C2\u770B\u5E7F\u544A");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hero_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "common_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weapon_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "equip_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_quota", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_need_item", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_need_item", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_buy", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_ordinary", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_ad", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_item_name", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_off", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec14], {
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
//# sourceMappingURL=25bf821d47ae9f40a09cfbddc9fbe5805b1ce1d2.js.map