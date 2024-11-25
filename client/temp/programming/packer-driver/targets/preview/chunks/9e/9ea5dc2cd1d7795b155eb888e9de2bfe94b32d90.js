System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Layout, Node, Prefab, Sprite, UITransform, tab, ItemPoolMgr, HeroItem, HeroDataControl, EventMgr, LocalEvent, HeroInfo, LangMgr, proto, Net, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, HeroRecommendPopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroItem(extras) {
    _reporterNs.report("HeroItem", "../../item/HeroItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
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
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      HeroItem = _unresolved_4.HeroItem;
    }, function (_unresolved_5) {
      HeroDataControl = _unresolved_5.HeroDataControl;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      LocalEvent = _unresolved_7.LocalEvent;
    }, function (_unresolved_8) {
      HeroInfo = _unresolved_8.HeroInfo;
    }, function (_unresolved_9) {
      LangMgr = _unresolved_9.LangMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      Net = _unresolved_10.Net;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e422jFxfNN3r3Pq/eL3MNn", "HeroRecommendPopItem", undefined);
      /*
       * @Date: 2024-05-11 14:19:03
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-22 14:52:22
       */


      __checkObsolete__(['_decorator', 'Component', 'Label', 'Layout', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroRecommendPopItem", HeroRecommendPopItem = (_dec = ccclass('HeroRecommendPopItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Label), _dec(_class = (_class2 = class HeroRecommendPopItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_desc", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "node_arrow_up", _descriptor3, this);

          _initializerDefineProperty(this, "node_arrow_down", _descriptor4, this);

          _initializerDefineProperty(this, "node_got_award_img", _descriptor5, this);

          _initializerDefineProperty(this, "node_hero", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_progress_now", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_progress_total", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_recommend_name", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_recommend_desc", _descriptor10, this);

          _initializerDefineProperty(this, "sp_reward_icon_bg", _descriptor11, this);

          _initializerDefineProperty(this, "sp_reward_icon", _descriptor12, this);

          _initializerDefineProperty(this, "lbl_reward_count", _descriptor13, this);

          this._showDetail = false;
          this._haveCount = 0;
          this._tabData = null;
          this._canRecive = false;
          this._parentScroll = null;
        }

        UpdateContent(data) {
          this._haveCount = 0;
          this._tabData = data.tabData;
          this._parentScroll = data.scrollView;
          this.node_desc.active = this._tabData["extend"] === 1;
          this.node_content.removeAllChildren();

          for (var i = 0; i < this._tabData.HeroIdList.length; i++) {
            var _itemId = this._tabData.HeroIdList[i];
            this.createItem(_itemId);

            var _map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getBookReceivedIds();

            var _itemData = _map.get(_itemId);

            if (_itemData) {
              this._haveCount++;
            }
          }

          this.lbl_progress_now.string = String(this._haveCount);
          this.lbl_progress_total.string = "/" + this._tabData.HeroIdList.length;
          this.lbl_recommend_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this._tabData.Name);
          this.lbl_recommend_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(this._tabData.Desc);
          /* 创建奖励 */

          var itemId = this._tabData.ItemId;
          var itemCount = this._tabData.ItemNum;
          var itemData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(itemId);
          this.sp_reward_icon.setTexture(itemData.Icon);
          this.lbl_reward_count.string = String(itemCount);
          var map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getRecommendTeamIds();
          var countEnough = this._haveCount >= this._tabData.HeroIdList.length;
          var isGot = map.get(this._tabData.Id);
          this._canRecive = countEnough && !isGot;
          this.sp_reward_icon.grayscale = !countEnough;
          this.sp_reward_icon_bg.grayscale = !countEnough;
          this.node_got_award_img.active = isGot;
          this.node_arrow_up.active = this._tabData["extend"] === 1;
          this.node_arrow_down.active = this._tabData["extend"] === 0;
        }

        showDetail() {
          var tabData = this._tabData;

          if (!tabData["extend"]) {
            tabData["extend"] = 1;
          } else {
            tabData["extend"] = 0;
          }

          this.node_arrow_up.active = tabData["extend"] === 1;
          this.node_arrow_down.active = tabData["extend"] === 0;
          this.node_desc.active = this._tabData["extend"] === 1;
          this.node_desc.getComponent(Layout).updateLayout();
          this.node.getComponent(Layout).updateLayout();

          var offset = this._parentScroll.getScrollOffset();

          this.lbl_recommend_desc.updateRenderData();

          if (this._tabData["extend"] === 1) {
            offset.y += this.lbl_recommend_desc.node.getComponent(UITransform).contentSize.height;
          } else {
            offset.y -= this.lbl_recommend_desc.node.getComponent(UITransform).contentSize.height;
          }

          this._parentScroll.scrollToOffset(offset, 1);
        }

        createItem(itemId) {
          var heroInfo = null;
          var heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTableById.getValue(itemId);

          if (!heroInfo) {
            heroInfo = new (_crd && HeroInfo === void 0 ? (_reportPossibleCrUseOfHeroInfo({
              error: Error()
            }), HeroInfo) : HeroInfo)();
            heroInfo.itemId = itemId;
            heroInfo.id = 0;
            heroInfo.level = 1;
            heroInfo.star = heroTab.DefaultStar;
          }

          var item = null;

          if (heroInfo) {
            item = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createHeroItem(heroInfo, this.node_content); // item.parent = this.node_content;
          }

          if (item) {
            var ts = item.getComponent(_crd && HeroItem === void 0 ? (_reportPossibleCrUseOfHeroItem({
              error: Error()
            }), HeroItem) : HeroItem);
            ts.setLevel(0);
            ts.setSelect(false);
            ts.setGrayScale();
            ts.setHeroStar(heroTab.DefaultStar);
            ts.setTouchCallBack(() => {
              (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.refreshBookData(heroInfo.itemId);
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).Click_Recommend_Hero);
            });
          }
        }
        /* 领取奖励 */


        sendMsg() {
          if (!this._canRecive) {
            return;
          }

          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_ReceiveRecommendTeamRewardReq();
          msg.recommendTeamId = this._tabData.Id;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveRecommendTeamRewardReq, msg);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_desc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_arrow_up", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_arrow_down", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_got_award_img", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_hero", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_progress_now", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_progress_total", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_recommend_name", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_recommend_desc", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sp_reward_icon_bg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_reward_icon", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "lbl_reward_count", [_dec14], {
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
//# sourceMappingURL=9ea5dc2cd1d7795b155eb888e9de2bfe94b32d90.js.map