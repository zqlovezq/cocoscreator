System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, Toggle, ViewPop, DEVELOPTYPE, RoleData, HeroDataControl, UIMgr, ViewName, LangMgr, tab, ItemInfo, ItemPoolMgr, PayControl, PayData, ChannelMgr, RedMgr, RedDotType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _crd, ccclass, property, Hero7GiftPackPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDEVELOPTYPE(extras) {
    _reporterNs.report("DEVELOPTYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "../../pay/PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      DEVELOPTYPE = _unresolved_3.DEVELOPTYPE;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }, function (_unresolved_5) {
      HeroDataControl = _unresolved_5.HeroDataControl;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      LangMgr = _unresolved_8.LangMgr;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      ItemInfo = _unresolved_10.ItemInfo;
    }, function (_unresolved_11) {
      ItemPoolMgr = _unresolved_11.ItemPoolMgr;
    }, function (_unresolved_12) {
      PayControl = _unresolved_12.PayControl;
    }, function (_unresolved_13) {
      PayData = _unresolved_13.PayData;
    }, function (_unresolved_14) {
      ChannelMgr = _unresolved_14.ChannelMgr;
    }, function (_unresolved_15) {
      RedMgr = _unresolved_15.RedMgr;
    }, function (_unresolved_16) {
      RedDotType = _unresolved_16.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39d99cteO5Ira8yZMHysFSn", "Hero7GiftPackPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Label', 'Node', 'SpringJoint2D', 'Sprite', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hero7GiftPackPop", Hero7GiftPackPop = (_dec = ccclass('Hero7GiftPackPop'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = (_class2 = class Hero7GiftPackPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_hero_desc", _descriptor, this);

          _initializerDefineProperty(this, "lbl_weapon_desc", _descriptor2, this);

          _initializerDefineProperty(this, "node_btn_toggle", _descriptor3, this);

          _initializerDefineProperty(this, "node_book_btn", _descriptor4, this);

          _initializerDefineProperty(this, "node_no_reach", _descriptor5, this);

          _initializerDefineProperty(this, "node_price", _descriptor6, this);

          _initializerDefineProperty(this, "node_got", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_view_desc", _descriptor8, this);

          _initializerDefineProperty(this, "node_layout", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_price", _descriptor10, this);

          _initializerDefineProperty(this, "sp_value", _descriptor11, this);

          _initializerDefineProperty(this, "node_hero", _descriptor12, this);

          _initializerDefineProperty(this, "node_weapon", _descriptor13, this);

          _initializerDefineProperty(this, "node_sp_hero", _descriptor14, this);

          _initializerDefineProperty(this, "node_sp_weapon", _descriptor15, this);

          this._view_type = (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).NONE;
          this._click_day = 0;
          this._cur_day = 0;
          this._tabID = 0;
          this.node_day_toggle = null;
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        onShow() {
          // 进来默认为Hero界面
          this._view_type = (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO; // 

          var newDate = new Date((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.createTime * 1000);
          var tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
          var times = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000;
          var nowDay = 1;

          if (times > 0) {
            nowDay = Math.ceil(((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000) / 86400) + 1;
          }

          var day = nowDay - (this._view_type - 1) * 7;
          this._cur_day = nowDay;
          this._click_day = day > 7 ? 7 : day;
          this.node.getChildByName("toggle_node1").active = true;
          this.node.getChildByName("toggle_node2").active = false;
          this.node_day_toggle = this.node.getChildByName("toggle_node" + this._view_type);
          this.node_day_toggle.getChildByName("Toggle" + this._click_day).getComponent(Toggle).isChecked = true;
          this.node_btn_toggle.getChildByName("hero_btn").getComponent(Toggle).isChecked = true;
          this.setView();
        }

        onDestroy() {
          super.onDestroy();
        }

        setView() {
          if (Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.SevenGiftPack) !== 2) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setClientData("SevenGiftPack", String(this._view_type));
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Seven_Gift_Pack);
          }

          this.node_hero.active = this._view_type === (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO;
          this.node_weapon.active = !this.node_hero.active;
          this.node_sp_hero.active = this.node_hero.active;
          this.node_sp_weapon.active = !this.node_hero.active;
          this.node_book_btn.active = this._cur_day > 7;
          this.setDay();
        }

        setDay() {
          this._tabID = this._view_type * 1000 + this._click_day;
          var giftData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().NewPlayerDailyGiftTableById.getValue(this._tabID);
          this.lbl_view_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_hero7giftpackpop_1", [giftData.CreateDay]);
          this.node_price.active = this._cur_day >= this._click_day + (this._view_type - 1) * 7;
          this.node_got.active = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.indexOf(giftData.Id) > -1;
          this.node_no_reach.active = !this.node_price.active && !this.node_got.active;
          this.lbl_view_desc.node.active = this.node_no_reach.active;
          var rechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(giftData.RechargeId);
          this.lbl_price.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTab);
          this.sp_value.setTexture(giftData.DiscountIcon);
          this.createAward();
        }

        switchView(e, type) {
          if (Number(type) == this._view_type) {
            return;
          }

          this._view_type = Number(type);
          var day = this._cur_day - (this._view_type - 1) * 7;
          this._click_day = day > 7 ? 7 : day;
          this.node.getChildByName("toggle_node1").active = this._view_type === (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO;
          this.node.getChildByName("toggle_node2").active = this._view_type === (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).BOOK;
          this.node_day_toggle = this.node.getChildByName("toggle_node" + this._view_type);
          this.node_day_toggle.getChildByName("Toggle" + this._click_day).getComponent(Toggle).isChecked = true;
          this.setView();
        }

        switchDay(e, day) {
          // 根据天数跟viewType显示界面
          if (this._click_day === Number(day)) {
            return;
          }

          this._click_day = Number(day);
          this.setDay();
        } // 点击侠客预览


        clickHeroDesc() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView("Hero7GiftPackPop");

          if (this._view_type === (_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO) {
            (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.refreshBookData(4401);
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
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_RareBookView);
          }
        } // 创建奖励


        createAward() {
          // 根据viewtype+day算出ID
          this.node_layout.destroyAllChildren();
          var giftData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().NewPlayerDailyGiftTableById.getValue(this._tabID);

          for (var i = 0; i < giftData.RewardItemIds.length; i++) {
            var awardInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            awardInfo.itemId = giftData.RewardItemIds[i];
            awardInfo.num = giftData.RewardItemNum[i];
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(awardInfo, this.node_layout);
          }
        } // 点击购买奖励


        clicRMBkBuy() {
          var self = this;
          var giftData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().NewPlayerDailyGiftTableById.getValue(this._tabID);
          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.requestPay(giftData.RechargeId, () => {
            if ((_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
              error: Error()
            }), PayData) : PayData).ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.indexOf(giftData.Id) === -1) {
              (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
                error: Error()
              }), PayData) : PayData).ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.push(giftData.Id);
            }

            this.setDay();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_hero_desc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_weapon_desc", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_btn_toggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_book_btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_no_reach", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_price", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_got", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_view_desc", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_layout", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_price", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sp_value", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_weapon", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_sp_hero", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_sp_weapon", [_dec16], {
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
//# sourceMappingURL=99eb3fdd4439de74795c3b1e239b70117c151fa8.js.map