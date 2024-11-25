System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, Prefab, Sprite, ViewPop, AssociationData, proto, CommonItem, ItemInfo, tab, AssociationGiftItem, AssociationControl, EventMgr, RoleData, ChannelMgr, ShowItemNotEnoughTips, ShowTips, LangMgr, sendChatToGuild, RedMgr, RedDotType, RedComp, RedEventComp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, AssociationGiftPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationGiftItem(extras) {
    _reporterNs.report("AssociationGiftItem", "./AssociationGiftItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendChatToGuild(extras) {
    _reporterNs.report("sendChatToGuild", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedComp(extras) {
    _reporterNs.report("RedComp", "../../../Common/component/RedComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedEventComp(extras) {
    _reporterNs.report("RedEventComp", "../../../Common/component/RedEventComp", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      AssociationData = _unresolved_3.AssociationData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      CommonItem = _unresolved_4.CommonItem;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      AssociationGiftItem = _unresolved_7.AssociationGiftItem;
    }, function (_unresolved_8) {
      AssociationControl = _unresolved_8.AssociationControl;
    }, function (_unresolved_9) {
      EventMgr = _unresolved_9.EventMgr;
    }, function (_unresolved_10) {
      RoleData = _unresolved_10.RoleData;
    }, function (_unresolved_11) {
      ChannelMgr = _unresolved_11.ChannelMgr;
    }, function (_unresolved_12) {
      ShowItemNotEnoughTips = _unresolved_12.ShowItemNotEnoughTips;
      ShowTips = _unresolved_12.ShowTips;
    }, function (_unresolved_13) {
      LangMgr = _unresolved_13.LangMgr;
    }, function (_unresolved_14) {
      sendChatToGuild = _unresolved_14.sendChatToGuild;
    }, function (_unresolved_15) {
      RedMgr = _unresolved_15.RedMgr;
    }, function (_unresolved_16) {
      RedDotType = _unresolved_16.RedDotType;
    }, function (_unresolved_17) {
      RedComp = _unresolved_17.default;
    }, function (_unresolved_18) {
      RedEventComp = _unresolved_18.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6075fFH0CpFnYsRUs88FiWZ", "AssociationGiftPop", undefined);
      /*
       * @Date: 2024-09-06 15:09:10
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-01 11:09:31
       * @ 砍价礼包
       */


      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationGiftPop", AssociationGiftPop = (_dec = ccclass('AssociationGiftPop'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = class AssociationGiftPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_price_total", _descriptor, this);

          _initializerDefineProperty(this, "lbl_price_cur", _descriptor2, this);

          _initializerDefineProperty(this, "common_item", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_log", _descriptor4, this);

          _initializerDefineProperty(this, "node_conten", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_bargain_count", _descriptor6, this);

          _initializerDefineProperty(this, "node_step_1", _descriptor7, this);

          _initializerDefineProperty(this, "node_step_2", _descriptor8, this);

          _initializerDefineProperty(this, "node_step_3", _descriptor9, this);

          _initializerDefineProperty(this, "node_bargain", _descriptor10, this);

          _initializerDefineProperty(this, "node_buy", _descriptor11, this);

          _initializerDefineProperty(this, "redPoint", _descriptor12, this);

          this._giftData = null;
          this._giftTab = null;
          this._bargain_Gift = false;
          this._guildInfo = null;
          this._openType = "";
        }

        onShow() {
          // 获取公会礼包
          this._openType = this.openData;
          this._guildInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo();
          this._giftData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getBargainGift(this._openType);
          this._giftTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildGiftTableById.getValue(this._giftData.tabId);
          this.asyncView();
        }

        asyncView() {
          // 加红点逻辑
          var com = this.node.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
            error: Error()
          }), RedComp) : RedComp);
          com.redNode = this.redPoint;
          var evet = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
            error: Error()
          }), RedEventComp) : RedEventComp)();
          evet.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Activity;
          evet.child = this.openData;
          com.types.push(evet);
          com.addRed();
          this._bargain_Gift = false;
          this.node_conten.destroyAllChildren();
          var award = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          award.itemId = this._giftTab.RewardItemId;
          award.num = this._giftTab.ItemCount;
          this.common_item.initData(award);
          var curPrice = this._giftTab.DiamondPrice;
          this.lbl_price_total.string = String(this._giftTab.DiamondPrice);

          for (var i = 0; i < this._giftData.bargainRecords.length; i++) {
            var record = this._giftData.bargainRecords[i];
            var item = instantiate(this.pfb_log);
            item.parent = this.node_conten;
            var itemTs = item.getComponent(_crd && AssociationGiftItem === void 0 ? (_reportPossibleCrUseOfAssociationGiftItem({
              error: Error()
            }), AssociationGiftItem) : AssociationGiftItem);
            itemTs.initData(record);
            curPrice -= record.bargainNum;

            if (record.roleId === (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.id) {
              this._bargain_Gift = true;
            }
          }

          var buyGift = false;

          if (this._giftTab.Button === "gift_btn1") {
            buyGift = this._guildInfo.isBoughtCycleGift;
          } else if (this._giftTab.Button === "gift_btn2") {
            buyGift = this._guildInfo.boughtUpLevelGiftTabIds.indexOf(this._giftTab.Id) > -1;
          }

          if (buyGift) {
            this.node_buy.getComponent(Button).interactable = false;
            this.node_buy.getComponent(Sprite).grayscale = true;
          }

          this.node_buy.active = this._bargain_Gift || buyGift || (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getIsMinPrice(this._openType);
          this.node_bargain.active = !this.node_buy.active; // 获取当前公会最大人数

          this.lbl_bargain_count.string = this._giftData.bargainRecords.length + "/" + (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getGuildMembersCount().totalCount; // 当前的价格

          this.lbl_price_cur.string = String(curPrice); // 当前的阶段

          var stepNumber = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().GuildGiftPhase;
          this.node_step_1.active = false;
          this.node_step_2.active = false;
          this.node_step_3.active = false;
          var step = 3;

          for (var k = 0; k < stepNumber.length; k++) {
            var _step = stepNumber[k] / 10000;

            if (curPrice / this._giftTab.DiamondPrice > _step) {
              step = k + 1;
              break;
            }
          }

          this["node_step_" + step].active = true;
        }

        register() {
          /* 监听公会砍价 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BargainGuildRsp, this.on_s2c_BargainGuildRsp, this);
          /* 监听购买公会礼包 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyGuildGiftRsp, this.on_s2c_BuyGuildGiftRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        onClickBargain() {
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqBargainGuild(this._giftData.id);
        }

        onClickBuy() {
          var needDimamond = Number(this.lbl_price_cur.string);

          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.diamond < needDimamond) {
            (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
              error: Error()
            }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
            return;
          }

          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqBuyGuildGift(this._giftData.id);
        }
        /* 砍价 */


        on_s2c_BargainGuildRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          var isHaveGift = false;

          for (var i = 0; i < this._guildInfo.gifts.length; i++) {
            var gift = this._guildInfo.gifts[i];

            if (gift.id === msg.giftId) {
              this._guildInfo.gifts[i] = msg.gift;
              isHaveGift = true;
              break;
            }
          }

          if (!isHaveGift) {
            this._guildInfo.gifts.push(msg.gift);
          }

          this._giftData = msg.gift;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Activity);
          this.asyncView(); // 判断当前是否是最低价 如果是发送公会聊天

          if ((_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getIsMinPrice(this._openType)) {
            console.log("cocos 最底价像聊天发送信息");
            (_crd && sendChatToGuild === void 0 ? (_reportPossibleCrUseOfsendChatToGuild({
              error: Error()
            }), sendChatToGuild) : sendChatToGuild)((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).ChatBreviaryType.ChatBreviaryType_GuildGiftLow);
          }
        }
        /* 购买礼包 */


        on_s2c_BuyGuildGiftRsp(msg) {
          /* 钻石是否足够 */
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (this._openType === "gift_btn1") {
            this._guildInfo.isBoughtCycleGift = true;
          } else if (this._openType === "gift_btn2") {
            this._guildInfo.boughtUpLevelGiftTabIds.push(this._giftTab.Id);
          }

          this.node_buy.getComponent(Button).interactable = false;
          this.node_buy.getComponent(Sprite).grayscale = true;
        }

        onClickShare() {
          console.log("js调用分享");
          (_crd && sendChatToGuild === void 0 ? (_reportPossibleCrUseOfsendChatToGuild({
            error: Error()
          }), sendChatToGuild) : sendChatToGuild)((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChatBreviaryType.ChatBreviaryType_GuildGiftBargain);
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_association_62"));
          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).share({
            'url': ""
          }, retData => {
            console.log("################ share " + JSON.stringify(retData));

            if (retData.code == 0) {// this.testLoopTask();
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_price_total", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_price_cur", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "common_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_log", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_conten", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_bargain_count", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_step_1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_step_2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_step_3", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_bargain", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_buy", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec13], {
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
//# sourceMappingURL=87ee8ce20682066e64a1925784f83a4f60f76a80.js.map