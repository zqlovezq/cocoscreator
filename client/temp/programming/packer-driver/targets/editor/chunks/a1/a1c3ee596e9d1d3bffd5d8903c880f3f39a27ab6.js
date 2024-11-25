System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, RichText, sp, Sprite, Toggle, ViewPop, tab, ItemPoolMgr, ItemInfo, LangMgr, LoadResAsync, HeroDataControl, ViewName, UIMgr, PayData, PayControl, ChannelMgr, RoleData, RedMgr, RedDotType, CommonTipsPop, HeroItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, FirstRechargePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "../../pay/PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
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
      Node = _cc.Node;
      RichText = _cc.RichText;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      LoadResAsync = _unresolved_7.LoadResAsync;
    }, function (_unresolved_8) {
      HeroDataControl = _unresolved_8.HeroDataControl;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      UIMgr = _unresolved_10.UIMgr;
    }, function (_unresolved_11) {
      PayData = _unresolved_11.PayData;
    }, function (_unresolved_12) {
      PayControl = _unresolved_12.PayControl;
    }, function (_unresolved_13) {
      ChannelMgr = _unresolved_13.ChannelMgr;
    }, function (_unresolved_14) {
      RoleData = _unresolved_14.RoleData;
    }, function (_unresolved_15) {
      RedMgr = _unresolved_15.RedMgr;
    }, function (_unresolved_16) {
      RedDotType = _unresolved_16.RedDotType;
    }, function (_unresolved_17) {
      CommonTipsPop = _unresolved_17.CommonTipsPop;
    }, function (_unresolved_18) {
      HeroItem = _unresolved_18.HeroItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e33fbTAOzNDUrwgFdckt2N9", "FirstRechargePop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'Label', 'Node', 'RichText', 'sp', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * FirstRechargePop
       * zhudingchao
       * Thu Jun 20 2024 11:19:29 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/firstRecharge/FirstRechargePop.ts
       *
       */

      _export("FirstRechargePop", FirstRechargePop = (_dec = ccclass('FirstRechargePop'), _dec2 = property(RichText), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec11 = property(Sprite), _dec12 = property(Node), _dec13 = property([Node]), _dec14 = property(Node), _dec15 = property(Label), _dec(_class = (_class2 = class FirstRechargePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "desRichtext", _descriptor, this);

          _initializerDefineProperty(this, "discountSpr", _descriptor2, this);

          _initializerDefineProperty(this, "heroNode", _descriptor3, this);

          _initializerDefineProperty(this, "propNode", _descriptor4, this);

          _initializerDefineProperty(this, "mainItemNode", _descriptor5, this);

          _initializerDefineProperty(this, "otherItemLayout", _descriptor6, this);

          _initializerDefineProperty(this, "priceLabel", _descriptor7, this);

          _initializerDefineProperty(this, "hero_spine", _descriptor8, this);

          _initializerDefineProperty(this, "chest_spine", _descriptor9, this);

          _initializerDefineProperty(this, "chestSpr", _descriptor10, this);

          _initializerDefineProperty(this, "buyBtnNode", _descriptor11, this);

          _initializerDefineProperty(this, "node_toggles", _descriptor12, this);

          _initializerDefineProperty(this, "node_one_buy", _descriptor13, this);

          _initializerDefineProperty(this, "allPriceLabel", _descriptor14, this);

          this.firstTable = void 0;
        }

        register() {}

        onShow() {
          let table = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.getFirstRechargeTable();

          if (table) {
            this.firstTable = table;
            this.node_toggles[table.Id - 1].getComponent(Toggle).isChecked = true;
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).First_Recharge);
            this.initView();
          }

          if (this.firstTable && this.firstTable.Id) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setClientData("openFirstRecharge", String(this.firstTable.Id));
          } else {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setClientData("openFirstRecharge", "1");
          }
        } // 设置toggle


        setToggles() {
          let tables = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.getFirstRechargeTabs();
          let boughtGoodsIds = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.payInfoMsg.firstRechargeInfo.boughtGoodsIds;
          this.node_one_buy.active = boughtGoodsIds.length === 0;

          for (let i = 0; i < tables.length; i++) {
            const _tab = tables[i];
            const _id = _tab.Id;
            this.node_toggles[i].active = boughtGoodsIds.indexOf(_id) < 0; // const lbl = this.node_toggles[i].getChildByName("name_txt").getComponent(Label);
            // const rechargeTable = tab.getData().RechargeTableById.getValue(_id);
            // lbl.string=ChannelMgr.getSdkRechargeShowPrice(rechargeTable);
          }
        }

        getFirstTab(id) {
          let tables = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.getFirstRechargeTabs();

          for (let key in tables) {
            let _id = tables[key].Id;

            if (_id === id) {
              return tables[key];
            }
          }
        }

        switchView(e, type) {
          if (this.firstTable.Id === Number(type)) {
            return;
          }

          this.firstTable = this.getFirstTab(Number(type));
          this.initView();
        }

        async initView() {
          this.setToggles();
          this.otherItemLayout.destroyAllChildren();
          this.mainItemNode.destroyAllChildren();
          let itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemInfo.initItemData(this.firstTable.FRItemIds[0], this.firstTable.FRItemNum[0]);
          const heroNode = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(itemInfo, this.mainItemNode);
          const heroTs = heroNode.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
            error: Error()
          }), HeroItem) : HeroItem);

          if (heroTs) {
            heroTs.setLevel(0);
          }

          for (let i = 1; i < this.firstTable.FRItemIds.length; i++) {
            let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            info.initItemData(this.firstTable.FRItemIds[i], this.firstTable.FRItemNum[i]);
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(info, this.otherItemLayout);
          }

          this.desRichtext.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this.firstTable.WordKey);

          if (this.firstTable.RateShow && this.firstTable.RateShow != "") {
            this.discountSpr.node.active = true;
            this.discountSpr.setTexture(this.firstTable.RateShow);
          } else {
            this.discountSpr.node.active = false;
          }

          if (this.firstTable.AnimationId) {
            if (itemInfo.itemTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ItemType.ItemType_Hero) {
              this.heroNode.active = true;
              this.propNode.active = false;
              let tempTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().AnimationTableById.getValue(this.firstTable.AnimationId);
              let spData = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)(tempTab.Path, sp.SkeletonData);
              this.hero_spine.skeletonData = spData;
              this.hero_spine.setAnimation(0, tempTab.AnimationName, true);
            } else {
              this.heroNode.active = false;
              this.propNode.active = true;
              let tempTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().AnimationTableById.getValue(this.firstTable.AnimationId);

              if (tempTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AnimationType.AnimationType_SpriteFrame) {
                this.chest_spine.node.active = false;
                this.chestSpr.setTexture(tempTab.Path);
              } else if (tempTab.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AnimationType.AnimationType_SkeletonData) {
                this.chestSpr.node.active = false;
                let spData = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                  error: Error()
                }), LoadResAsync) : LoadResAsync)(tempTab.Path, sp.SkeletonData);
                this.chest_spine.skeletonData = spData;
                this.chest_spine.setAnimation(0, tempTab.AnimationName, true);
              }
            }
          } else {
            this.hero_spine.node.active = false;
          }

          let rechargeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(this.firstTable.RechargeId);
          let allRechargeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(1004);
          this.priceLabel.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTable);
          this.allPriceLabel.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(allRechargeTable);
        }

        onClickBuy() {
          const cb = () => {
            (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
              error: Error()
            }), PayControl) : PayControl).ins.requestPay(this.firstTable.RechargeId, () => {
              if ((_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
                error: Error()
              }), PayData) : PayData).ins.isShowFirstRecharge()) {
                this.onShow();
              } else {
                this.onClose();
              }
            });
          };

          let boughtGoodsIds = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.payInfoMsg.firstRechargeInfo.boughtGoodsIds;

          if (boughtGoodsIds.length === 0) {
            const tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_firstrecharge_1");
            (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
              error: Error()
            }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
              if (val) {
                cb();
              }
            });
          } else {
            cb();
          }
        } // 一键购买


        onClickOneBuy() {
          let boughtGoodsIds = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.payInfoMsg.firstRechargeInfo.boughtGoodsIds;

          if (boughtGoodsIds.length === 0) {
            (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
              error: Error()
            }), PayControl) : PayControl).ins.requestPay(1004, () => {
              (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.setClientData("openFirstRecharge", String(4));
              this.onClose();
            });
          }
        }

        onClickHero() {
          let itemTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this.firstTable.FRItemIds[0]);

          if (itemTable.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ItemType.ItemType_Hero) {
            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.refreshBookData(itemTable.Id);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).HeroBagView,
              data: {
                viewType: 2
              },
              zIndex: 300
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "desRichtext", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "discountSpr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "heroNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "propNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainItemNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "otherItemLayout", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "priceLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "hero_spine", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "chest_spine", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "chestSpr", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "buyBtnNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_toggles", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_one_buy", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "allPriceLabel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1c3ee596e9d1d3bffd5d8903c880f3f39a27ab6.js.map