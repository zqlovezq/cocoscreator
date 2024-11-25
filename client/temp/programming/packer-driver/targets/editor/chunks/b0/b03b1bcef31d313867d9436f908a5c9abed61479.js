System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Prefab, ScrollView, sp, Sprite, Toggle, ComponentBase, UIMgr, PayControl, ChapterGiftItem, tab, MallDataMgr, ItemInfo, ItemPoolMgr, EventMgr, LocalEvent, ViewName, createAnimation, Func, ActivityMainView, ChannelMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, ChapterGiftView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChapterGiftItem(extras) {
    _reporterNs.report("ChapterGiftItem", "./ChapterGiftItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../../shop/MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityMainView(extras) {
    _reporterNs.report("ActivityMainView", "./ActivityMainView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      PayControl = _unresolved_4.PayControl;
    }, function (_unresolved_5) {
      ChapterGiftItem = _unresolved_5.ChapterGiftItem;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      MallDataMgr = _unresolved_7.MallDataMgr;
    }, function (_unresolved_8) {
      ItemInfo = _unresolved_8.ItemInfo;
    }, function (_unresolved_9) {
      ItemPoolMgr = _unresolved_9.ItemPoolMgr;
    }, function (_unresolved_10) {
      EventMgr = _unresolved_10.EventMgr;
    }, function (_unresolved_11) {
      LocalEvent = _unresolved_11.LocalEvent;
    }, function (_unresolved_12) {
      ViewName = _unresolved_12.ViewName;
    }, function (_unresolved_13) {
      createAnimation = _unresolved_13.createAnimation;
    }, function (_unresolved_14) {
      Func = _unresolved_14.Func;
    }, function (_unresolved_15) {
      ActivityMainView = _unresolved_15.ActivityMainView;
    }, function (_unresolved_16) {
      ChannelMgr = _unresolved_16.ChannelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "143a4bwDXJL8LRZqQOSvzPW", "ChapterGiftView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'ScrollView', 'sp', 'Sprite', 'Toggle', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChapterGiftView", ChapterGiftView = (_dec = ccclass('ChapterGiftView'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(sp.Skeleton), _dec7 = property(Sprite), _dec8 = property(ScrollView), _dec(_class = (_class2 = class ChapterGiftView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_toggle", _descriptor, this);

          _initializerDefineProperty(this, "node_toggle_content", _descriptor2, this);

          _initializerDefineProperty(this, "node_layout", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_price", _descriptor4, this);

          _initializerDefineProperty(this, "spine_boss", _descriptor5, this);

          _initializerDefineProperty(this, "sp_discount", _descriptor6, this);

          _initializerDefineProperty(this, "scroll_view", _descriptor7, this);

          this._shop_view = new Map();
          this._curView = 0;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Chapter_Gift_Change, this.changeView, this);
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        onShow(map) {
          if (map) {
            this._shop_view = map;
          }

          if (this._shop_view.size === 0) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ActivityMainView
            });
            return;
          }

          let count = 0;
          this.node_toggle_content.destroyAllChildren();

          this._shop_view.forEach((val, key) => {
            const id = key;
            const mallTab = val;
            const ChapterGiftTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().MainChapterGiftTableByMallId.getValue(mallTab.MallId);
            const toggleItem = instantiate(this.pfb_toggle);
            toggleItem.parent = this.node_toggle_content;
            const toggleItemTs = toggleItem.getComponent(_crd && ChapterGiftItem === void 0 ? (_reportPossibleCrUseOfChapterGiftItem({
              error: Error()
            }), ChapterGiftItem) : ChapterGiftItem);
            toggleItemTs.initData(id, ChapterGiftTab.MainChapterId);
            count++;

            if (count === this._shop_view.size) {
              this._curView = id;
              toggleItem.getComponent(Toggle).isChecked = true;

              if (this._shop_view.size > 4) {
                this.scroll_view.scrollToRight();
              }
            }
          });

          this.setViewByMallId();
        }

        changeView(id) {
          this._curView = id;
          this.setViewByMallId();
        } // 根据MallItemTable的id创建界面


        setViewByMallId() {
          const curMallTab = this._shop_view.get(this._curView);

          const ChapterGiftTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterGiftTableByMallId.getValue(curMallTab.MallId);
          const awards = curMallTab.GetItemIds;
          const awardNums = curMallTab.GetItemNum;
          this.node_layout.destroyAllChildren();

          for (let i = 0; i < awards.length; i++) {
            const awardInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            awardInfo.itemId = awards[i];
            awardInfo.num = awardNums[i];
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(awardInfo, this.node_layout);
          } // 价格


          if (curMallTab.RechargeId) {
            const rechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RechargeTableById.getValue(curMallTab.RechargeId);
            this.lbl_price.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTab);
          }

          const chapterData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(ChapterGiftTab.MainChapterId);
          (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
            error: Error()
          }), createAnimation) : createAnimation)(this.spine_boss.node, ChapterGiftTab.AnimationId);
          this.sp_discount.setTexture(ChapterGiftTab.DiscountIcon); // this.lbl_name.string = LangMgr.getLab(chapterData.Name);

          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).setItem("chapter_gift_" + curMallTab.Id, "true");
          const view = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView('ActivityMainView');
          view.getComponent(_crd && ActivityMainView === void 0 ? (_reportPossibleCrUseOfActivityMainView({
            error: Error()
          }), ActivityMainView) : ActivityMainView).refreshChapterRed();
        }

        clicRMBkBuy() {
          var self = this;

          const curMallTab = this._shop_view.get(this._curView);

          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.requestPay(curMallTab.RechargeId, () => {
            this._shop_view.delete(this._curView);

            (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
              error: Error()
            }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(curMallTab.MallId).set(curMallTab.Id, 1);
            self.onShow();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_toggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle_content", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_price", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spine_boss", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp_discount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scroll_view", [_dec8], {
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
//# sourceMappingURL=b03b1bcef31d313867d9436f908a5c9abed61479.js.map