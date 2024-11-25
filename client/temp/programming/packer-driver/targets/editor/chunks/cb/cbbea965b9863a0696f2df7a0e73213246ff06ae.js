System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Sprite, InfiniteCell, tab, HeroItem, HeroInfo, CommonItem, PayControl, proto, ActivityData, ChannelMgr, ItemInfo, ItemPoolMgr, Net, HeroDataControl, ButtonLock, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, CombineStarUpCellItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../../hero/HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../hero/herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonLock(extras) {
    _reporterNs.report("ButtonLock", "../../../utils/GameUtil", _context.meta, extras);
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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      HeroItem = _unresolved_4.HeroItem;
    }, function (_unresolved_5) {
      HeroInfo = _unresolved_5.HeroInfo;
    }, function (_unresolved_6) {
      CommonItem = _unresolved_6.CommonItem;
    }, function (_unresolved_7) {
      PayControl = _unresolved_7.PayControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      ActivityData = _unresolved_8.ActivityData;
    }, function (_unresolved_9) {
      ChannelMgr = _unresolved_9.ChannelMgr;
    }, function (_unresolved_10) {
      ItemInfo = _unresolved_10.ItemInfo;
    }, function (_unresolved_11) {
      ItemPoolMgr = _unresolved_11.ItemPoolMgr;
    }, function (_unresolved_12) {
      Net = _unresolved_12.Net;
    }, function (_unresolved_13) {
      HeroDataControl = _unresolved_13.HeroDataControl;
    }, function (_unresolved_14) {
      ButtonLock = _unresolved_14.ButtonLock;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67c8dlpkCJBbrmcoBL6tjvF", "CombineStarUpCellItem", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CombineStarUpCellItem", CombineStarUpCellItem = (_dec = ccclass('CombineStarUpCellItem'), _dec2 = property(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
        error: Error()
      }), HeroItem) : HeroItem), _dec3 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Button), _dec7 = property(Label), _dec8 = property(Node), _dec9 = (_crd && ButtonLock === void 0 ? (_reportPossibleCrUseOfButtonLock({
        error: Error()
      }), ButtonLock) : ButtonLock)(1, () => {}), _dec(_class = (_class2 = class CombineStarUpCellItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "item_hero", _descriptor, this);

          _initializerDefineProperty(this, "item_free", _descriptor2, this);

          _initializerDefineProperty(this, "node_layout", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_remain_times", _descriptor4, this);

          _initializerDefineProperty(this, "btn_price", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_price", _descriptor6, this);

          _initializerDefineProperty(this, "node_lock", _descriptor7, this);

          this._tabData = null;
          this._heroGrowData = null;
          this._canReceive = false;
        }

        UpdateContent(data) {
          this._tabData = data.tab;
          this._heroGrowData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getHeroGrowData(data.id);
          let info = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
            error: Error()
          }), HeroInfo) : HeroInfo)();
          info.createDefaultData(this._tabData.HeroId, this._tabData.HeroStar);
          this.item_hero.UpdateContent(info);
          this.item_hero.setLevel(0); // 设置免费奖励

          this.setFreeAward(); // 设置付费奖励

          this.setBuyAward();
        }

        setFreeAward() {
          const _tab = this._tabData;
          const awardId = _tab.FreeRewardId;
          const awardCount = _tab.FreeRewardCount;
          let itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemInfo.initItemData(awardId, awardCount);
          this.item_free.initData(itemInfo);

          if (this._heroGrowData.receivedFreeRewardStars.indexOf(_tab.HeroStar) > -1) {
            // 已经领取
            this.item_free.setSelectState(true);
            this.node_lock.active = false;
            this._canReceive = false;
          } else {
            // 是否可以领取
            this.item_free.setSelectState(false);
            const maxStar = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getMaxPaintingStar(this._heroGrowData.heroItemId);
            this._canReceive = maxStar >= _tab.HeroStar;
            this.node_lock.active = !this._canReceive;
          }
        }

        setBuyAward() {
          this.node_layout.destroyAllChildren();
          const _tab = this._tabData;

          for (let i = 0; i < _tab.RewardIds.length; i++) {
            const id = _tab.RewardIds[i];
            const count = _tab.RewardCount[i];
            const awardInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            awardInfo.itemId = id;
            awardInfo.num = count;
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(awardInfo, this.node_layout);
          } // 设置购买价格


          const rechargeId = this._tabData.RechargeId;
          const rechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(rechargeId);
          this.lbl_price.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTab);
          this.setBuyBtn();
        }

        setBuyBtn() {
          // 设置剩余次数
          const buyCount = this._heroGrowData.boughtNotFreeRewardTimesMap[this._tabData.HeroStar];
          const remainTimes = this._tabData.LimitCount - buyCount;
          this.lbl_remain_times.string = String(remainTimes);
          const sp = this.btn_price.node.getComponent(Sprite);
          sp.grayscale = remainTimes <= 0;
          this.btn_price.interactable = remainTimes > 0;
        }

        clickFree() {
          if (this._canReceive) {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_ReceiveActivityHeroGrowRewardReq();
            msg.activityId = this._heroGrowData.activityId;
            msg.star = this._tabData.HeroStar;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.ReceiveActivityHeroGrowRewardReq, msg);
          }
        }

        clickRMB() {
          var self = this;

          if (this._heroGrowData.boughtNotFreeRewardTimesMap[this._tabData.HeroStar] >= this._tabData.LimitCount) {
            return;
          }

          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.requestPay(this._tabData.RechargeId, () => {
            this._heroGrowData.boughtNotFreeRewardTimesMap[this._tabData.HeroStar]++;
            self.setBuyBtn();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item_hero", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item_free", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_layout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_remain_times", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_price", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_price", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "clickFree", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "clickFree"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cbbea965b9863a0696f2df7a0e73213246ff06ae.js.map